import {Rating, RatingSummary, YTComment} from "./youtubeDataProvider";
import {supabase} from "../helpers/supabaseWrapper";

export const _createComment = async (comment: YTComment) => {
    const {data, error} = await supabase
        .from("comment")
        .insert(comment)
    return {data,error}
}

export const _getCommentsForVideo = async (videoId: string, pageNumber: number) => {
    const commentsPerPage = 5;

    const countResponse = await _getCommmentsCount(videoId);
    if (countResponse.error) return {commentsPageCount: null, data: null, error: countResponse.error};
    const countTotal = countResponse.count;

    const {data, error} = await supabase
        .rpc("get_comments_with_useridentity")
        .match({video_id: videoId})
        .range(commentsPerPage * (pageNumber - 1), commentsPerPage * (pageNumber) - 1)
        .order('created_at', { ascending: false })

    return {commentsPageCount: Math.ceil(countTotal / commentsPerPage) || 1, data, error}
}

export const _getCommmentsCount = async(videoId: string): Promise<any> => {
    return supabase
        .from("comment")
        .select("*", {count: "exact", head: true})
        .match({video_id: videoId})
}

export const _updateRating = async (rating: Rating) => {
    return supabase
        .from("rating")
        .update({stars: rating.stars})
        .match({user_id: rating.userId})
        .match({video_id: rating.videoId})
}

export const _createRating = async (rating: Rating) => {
    return supabase
        .from("rating")
        .insert({
            user_id: rating.userId,
            video_id: rating.videoId,
            stars: rating.stars
        })
}

export const _getRatingSummary = async (videoId: string, userId?: string): Promise<RatingSummary> => {
    const {data, error} = await supabase.rpc("get_sum_of_ratings", {"_video_id": videoId});
    if (!data || data.length === 0) {
        return {
            avgStars: 0,
            numTotalRatings: 0,
        }
    }
    const starsSum = data[0].stars_sum;
    const ratingCount = data[0].rating_count
    let summary: RatingSummary = {
        avgStars: starsSum / ratingCount,
        numTotalRatings: ratingCount,
        ownGivenStars: undefined
    };

    if (userId) {
        const response = await supabase
            .from("rating")
            .select("*")
            .eq("user_id", userId)
            .eq("video_id", videoId)
            .single()
        summary.ownGivenStars = response.data ? response.data.stars : undefined;
    }
    return summary;
}