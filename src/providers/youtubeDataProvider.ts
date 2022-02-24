import {mockVideoItems} from "../__mocks__/mockData";
import {
    _createComment,
    _createRating,
    _getCommentsForVideo,
    _getCommmentsCount,
    _getRatingSummary,
    _updateRating
} from "./customApiLayer";
import {PostgrestError, PostgrestResponse} from "@supabase/supabase-js";
import {DataContextChangeListener, IDataProvider} from "../interfaces/IDataProvider";
import moment from "moment";
import {findWordsRelatedTo} from "../helpers/relatedWordsHelper";
import {getNRandomElements} from "../helpers/helper";
import axios, {AxiosError} from "axios";

export interface YoutubeSearchResult {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    regionCode:    string;
    pageInfo:      PageInfo;
    items:         Item[];
}

export interface ContentDetails {
    duration:        string;
    dimension:       string;
    definition:      string;
    caption:         string;
    licensedContent: boolean;
    contentRating:   ContentRating;
    projection:      string;
}

export interface ContentRating {
}

export interface Item {
    kind:     string;
    etag:     string;
    id:       ID | string;
    snippet?: Snippet;
    statistics?: YTVideoStatistics;
    contentDetails?: ContentDetails;
}

export interface ID {
    kind:    string;
    videoId: string;
}

export interface Localized {
    title: string;
    description: string;
}

export interface Snippet {
    publishedAt:          string;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
    publishTime?:          string;
    tags?:string[];
    categoryId?: string;
    defaultLanguage?: string;
    localized: Localized;
    defaultAudioLanguage: string;
}

export interface Thumbnails {
    default:  YoutubeThumbnail;
    medium:   YoutubeThumbnail;
    high:     YoutubeThumbnail;
    standard: YoutubeThumbnail;
    maxres:   YoutubeThumbnail;
}

export interface YoutubeThumbnail {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

export interface Rating {
    videoId: string;
    userId: string;
    stars: number;
}

export interface YTVideoStatistics {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
}

export interface RatingSummary {
    numTotalRatings: number;
    avgStars: number;
    ownGivenStars?: number;
}

export interface VideoStatistics {
    numViews: number;
    ratingSummary: RatingSummary;
    videoLength: number;
}

export interface Creator {
    name: string;
    channelUrl: string;
}

export interface Video {
    title: string;
    creator: Creator;
    statistics: VideoStatistics;
    ratingSummary: RatingSummary;
}

export interface YTComment {
    user_id: string,
    video_id: string,
    text_content: string,
    created_at: string;
    user_display_name: string;
    user_avatar_url: string;
}

export type YTSearchRequestOrder = "viewCount" | "relevance" | "rating" | "title" | "videoCount"

export interface YTSearchRequestParams {
    maxResults?: number;
    publishedAfter?: string;
    publishedBefore?: string;
    part:string;
    order?: YTSearchRequestOrder;
    q?: string;
    type?: string;
    relatedToVideoId?: string;
    channelId?: string;
}

export type Chart = "mostPopular";

export type YoutubeResource = "videos" | "search" | "videoCategories" | "channels";

class YoutubeDataProvider implements IDataProvider {

    year: number;
    changeListeners: DataContextChangeListener[];

    constructor(year: number) {
        this.year = year;
        this.changeListeners = [];
    }

    getCurrentDate(): moment.Moment {
        const years_diff_from_now: number = moment().diff(`${(this.year)}-01-01`, 'years');
        return moment().subtract(years_diff_from_now, 'years')
    }

    notifyAllListeners(newYear: number) {
        for (const listener of this.changeListeners) {
            listener.callback(newYear);
        }
    }

    changeYear(newYear: number): void {
        this.year = newYear;
        this.notifyAllListeners(newYear);
    }

    addChangeListener(callback: (newYear: number) => void): DataContextChangeListener {
        const newListener = { callback };
        this.changeListeners.push(newListener);
        return newListener;
    }

    removeChangeListener(listener: DataContextChangeListener) {
        this.changeListeners = this.changeListeners.filter(l => l !== listener);
    }

    getCurrentDateAsUTC(xDaysAgo: number=0) {
        return moment.utc(this.getCurrentDate().subtract(xDaysAgo, "days")).format();
    }

    STANDARD_LIST_PARAMETERS = {
        maxResults: 20
    };

    STANDARD_SEARCH_PARAMETERS = {
        maxResults: 20,
    }

    async makeYoutubeRequest(ytResource: YoutubeResource, parameters: any): Promise<any> {
        return axios.get("/.netlify/functions/youtubeApi", {
            params: {
                ...parameters,
                youtubeResource: ytResource
            },
        })
    }

    private mapItemsToIds = (items: Item[]): string[] => {
        return items.map((item: Item) => {
            if (typeof (item.id) === "string" ) return item.id
            return item.id.videoId
        });
    }

    async search (searchQuery: string, publishedBefore: string): Promise<any> {
        return null;
    }

    async makeYoutubeListRequest(parameters: any): Promise<any> {
        return this.makeYoutubeRequest("videos", parameters);
    }

    async makeYoutubeSearchRequest(parameters: YTSearchRequestParams): Promise<{data: Item[] | null, error: string | null}> {

        try {
            const _result: any = await this.makeYoutubeRequest("search", parameters);
            let videoIds = this.mapItemsToIds(_result.data.items);
            const videosWithFullContentInfo = await this.getMoreInfoAboutVideos(videoIds);
            return {
                data: videosWithFullContentInfo.data,
                error: null
            };
        } catch(error: any) {
            console.log(error.toJSON());

            let errorMessage = "error occured";
            if (error.response.status === 403) {
                errorMessage = "YouTube quota was exceeded"
            }
            return {data: null, error: errorMessage}
        }
    }

    async getLatestVideos(): Promise<{data: Item[] | null, error: string | null}> {
        const mostPopularCategories = ["Sports", "Film", "Animals", "Viral", "Science", "Music", "Travel", "Gaming", "Videoblogging", "Comedy", "Politics"]
        const searchQuery = getNRandomElements(mostPopularCategories, 3).join("|");

        return this.makeYoutubeSearchRequest({
            "maxResults": 9,
            "publishedAfter": this.getCurrentDateAsUTC(7),
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": "snippet, id",
            "order": "viewCount",
            "q": searchQuery,
            "type": "video",
        })
    }

    async getRandomVideos (beforeDate: number, category?: string): Promise<Item[]>  {
        return mockVideoItems;
    }

    async getVideosFromChannel (channelId: string): Promise<{data: Item[] | null, error: string | null}> {
        return this.makeYoutubeSearchRequest({
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": "snippet, id",
            channelId,
            "type": "video"
        });
    }

    async getVideosRelatedToVideo(videoId: string): Promise<{data: Item[] | null, error: string | null}> {
        return this.makeYoutubeSearchRequest({
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": "snippet, id",
            "relatedToVideoId": videoId,
            "type": "video"
        });
    }

    async getVideosRelatedToTags(tags: string[]): Promise<{data: Item[] | null, error: string | null}> {
        return this.makeYoutubeSearchRequest({
            "part": "snippet,id",
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "order": "viewCount",
            "q": getNRandomElements(tags, 5).join("|")
        });
    }

    async getMoreInfoAboutVideos (
        videoIds: string[],
        parts=["id", "snippet", "contentDetails", "statistics"]
    ): Promise<{data: Item[] | null, error: string | null}> {
        const response = await this.makeYoutubeListRequest({
            ...this.STANDARD_LIST_PARAMETERS,
            "part": parts.join(","),
            "id": videoIds.join(",")
        })

        return {data: response.data.items, error: null}
    }

    async createComment (comment: YTComment) {
        return _createComment(comment)
    }

    async deleteComment (commentId: string): Promise<{data: any[] | null, error: PostgrestError | null}> {
        return {data: null, error: null}
    }

    async editComment (commentId: string, newComment: string): Promise<{data: any[] | null, error: PostgrestError | null}> {
        return {data: null, error: null}
    }

    async getCommentsForVideo (videoId: string, pageNumber: number) {
        return _getCommentsForVideo(videoId, pageNumber)
    }

    async getCommentsCount(videoId: string): Promise<PostgrestResponse<number>> {
        return _getCommmentsCount(videoId);
    };

    async updateRating (rating: Rating) {
        return _updateRating(rating);
    }

    async createRating (rating: Rating) {
        return _createRating(rating);
    }

    async getRatingSummary (videoId: string, userId?: string): Promise<RatingSummary> {
        return _getRatingSummary(videoId, userId);
    }

    async getVideosFromCategory(title: string, chart: Chart): Promise<{data: Item[] | null, error: string | null}> {
        const relatedWordsToCategory = findWordsRelatedTo(title);

        return this.makeYoutubeSearchRequest({
            "part": "id,snippet",
            "maxResults": 8,
            "q": relatedWordsToCategory.join("|"),
            // "order": "viewCount",
            "publishedBefore": this.getCurrentDateAsUTC(),
        })
    }

    async getCategories(): Promise<any> {
        const response = await this.makeYoutubeRequest("videoCategories", {
            "part": "snippet",
            "regionCode": "US"
        })

        return {data: response.data.items, error: null};
    }

    async getChannelInformation(channelId: string): Promise<{data: any, error: string | null}> {
        const response = await this.makeYoutubeRequest("channels", {
            "part": "snippet,contentDetails,statistics",
            "id": channelId
        })

        return {data: response.data.items[0], error: null};
    }
}

export default YoutubeDataProvider;

