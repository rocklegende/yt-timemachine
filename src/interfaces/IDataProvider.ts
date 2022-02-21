import {PostgrestError, PostgrestResponse} from "@supabase/supabase-js";
import {Chart, Item, Rating, RatingSummary, YTComment} from "../providers/youtubeDataProvider";

export type DataContextChangeListener = {
    callback:(newYear: number) => void;
}

export interface IDataProvider {
    year:number;
    getCurrentDate(): moment.Moment;
    changeYear(newYear: number): void;
    addChangeListener(callback: (newYear: number) => void): DataContextChangeListener;
    removeChangeListener(listener: DataContextChangeListener): void;
    search (searchQuery: string, publishedBefore: string): Promise<Item[]>;
    getRandomVideos (beforeDate: number, category?: string): Promise<Item[]>;
    getVideosFromChannel (channelId: string): Promise<{data: Item[] | null, error: string | null}>;
    getVideosRelatedToVideo(videoId: string): Promise<{data: Item[] | null, error: string | null}>;
    getVideosRelatedToTags(tags: string[]): Promise<{data: Item[] | null, error: string | null}>;
    getMoreInfoAboutVideos (videoIds: string[], parts?: string[]): Promise<{data: Item[] | null, error: string | null}>;
    createComment (comment: YTComment):  Promise<{data: any[] | null, error: PostgrestError | null}>;
    deleteComment (commentId: string):  Promise<{data: any[] | null, error: PostgrestError | null}>;
    editComment (commentId: string, newComment: string): Promise<{data: any[] | null, error: PostgrestError | null}>;
    getCommentsForVideo (videoId: string, pageNumber: number): Promise<{commentsPageCount: number | null, data: YTComment[] | null, error: PostgrestError | null}>;
    getRatingSummary (videoId: string, userId?: string): Promise<RatingSummary>;
    updateRating (rating: Rating): Promise<PostgrestResponse<any>>;
    createRating(rating: Rating): Promise<PostgrestResponse<any>>;
    getCommentsCount(videoId: string): Promise<PostgrestResponse<number>>;
    getVideosFromCategory(title: string, chart: Chart): Promise<{data: Item[] | null, error: string | null}>;
    getCategories(): Promise<any>;
    getLatestVideos(): Promise<{data: Item[] | null, error: string | null}>;
    getChannelInformation(channelId: string): Promise<{data: any, error: string | null}>
}