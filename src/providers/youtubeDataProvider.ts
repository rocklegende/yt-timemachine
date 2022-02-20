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
    part:string[];
    order?: YTSearchRequestOrder;
    q?: string;
    type?: string[];
    relatedToVideoId?: string;
    channelId?: string;
}

export type Chart = "mostPopular";

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

    private loadClient = async () => {
        return new Promise((resolve, reject) => {
            gapi.load("client", resolve);
        })
    }

    private async loadClientThenYoutube() {
        if ("client" in window.gapi) {
            return;
        }

        const loadClientResponse = await this.loadClient();

        if (!process.env.REACT_APP_GOOGLE_API_KEY) {
            throw Error("process environment REACT_APP_GOOGLE_API_KEY variable was not found")
        }

        window.gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
        return await window.gapi.client.load("youtube", "v3");
    }

    private mapItemsToIds = (items: Item[]): string[] => {
        return items.map((item: Item) => {
            if (typeof (item.id) === "string" ) return item.id
            return item.id.videoId
        });
    }

    async search (searchQuery: string, publishedBefore: string): Promise<any> {
        await this.loadClientThenYoutube();
        //@ts-ignore youtube gets injected dynamically therefore TS will throw an error here
        // return window.gapi.client.youtube.search.list({
        //     "part": [
        //         "snippet"
        //     ],
        //     "relatedToVideoId": "Ks-_Mh1QhMc",
        //     "type": [
        //         "video"
        //     ]
        // })
    }

    async makeYoutubeSearchRequest(params: YTSearchRequestParams): Promise<{data: Item[] | null, error: string | null}> {
        await this.loadClientThenYoutube();

        //@ts-ignore
        let {result} = await window.gapi.client.youtube.search.list(params);
        console.log(result);
        // if (result.status !== 200) {
        //     return {data: null, error: "Something went wrong"}
        // }

        let videoIds = this.mapItemsToIds(result.items);
        const videosWithFullContentInfo = await this.getMoreInfoAboutVideos(videoIds);
        return {
            data: videosWithFullContentInfo.data,
            error: null
        };
    }

    async getLatestVideos(): Promise<{data: Item[] | null, error: string | null}> {
        const mostPopularCategories = ["Sports", "Film", "Animals", "Viral", "Science", "Music", "News", "Gaming"]
        const searchQuery = getNRandomElements(mostPopularCategories, 4).join("|");
        console.log(searchQuery);

        return this.makeYoutubeSearchRequest({
            "maxResults": 9,
            "publishedAfter": this.getCurrentDateAsUTC(7),
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": [
                "snippet, id"
            ],
            "order": "viewCount",
            "q": searchQuery,
            "type": [
                "video"
            ]
        })
    }

    async getRandomVideos (beforeDate: number, category?: string): Promise<Item[]>  {
        return mockVideoItems;
    }

    async getVideosFromChannel (channelId: string): Promise<{data: Item[] | null, error: string | null}> {
        return this.makeYoutubeSearchRequest({
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": [
                "snippet, id"
            ],
            channelId,
            "type": [
                "video"
            ]
        });
    }

    async getVideosRelatedToVideo(videoId: string): Promise<{data: Item[] | null, error: string | null}> {

        return this.makeYoutubeSearchRequest({
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": [
                "snippet, id"
            ],
            "relatedToVideoId": videoId,
            "type": [
                "video"
            ]
        });
    }

    async getVideosRelatedToTags(tags: string[]): Promise<{data: Item[] | null, error: string | null}> {
        return this.makeYoutubeSearchRequest({
            "part": [
                "snippet,id"
            ],
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "q": getNRandomElements(tags, 5).join("|")
        });
    }

    async getMoreInfoAboutVideos (
        videoIds: string[],
        parts=["id", "snippet", "contentDetails", "statistics"]
    ): Promise<{data: Item[] | null, error: string | null}> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        const response = await window.gapi.client.youtube.videos.list({
            ...this.STANDARD_LIST_PARAMETERS,
            "part": [
                parts.join(",")
            ],
            "id": videoIds
        });
        // if (response.status !== 200) {
        //     return {data: null, error: "Youtube list request failed"}
        // }

        return {data: response.result.items, error: null}
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
        console.log({title, words: relatedWordsToCategory});

        return this.makeYoutubeSearchRequest({
            "part": [
                "id,snippet"
            ],
            "maxResults": 8,
            "q": relatedWordsToCategory.join("|"),
            "publishedBefore": this.getCurrentDateAsUTC(),
        })


        // const response = await window.gapi.client.youtube.videos.list({
        //     "part": [
        //         "id,snippet,contentDetails,statistics"
        //     ],
        //     "maxResults": 8,
        //     "chart": "mostPopular",
        //     "regionCode": "US",
        //     "videoCategoryId": categoryId
        // });
        // console.log({videoFromCategory: response})
        // return {data: response.result.items, error: null};
    }
    async getCategories(): Promise<any> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        const response = await window.gapi.client.youtube.videoCategories.list({
            "part": [
                "snippet"
            ],
            "regionCode": "US"
        });
        return {data: response.result.items, error: null};
    }

    async getChannelInformation(channelId: string): Promise<{data: any, error: string | null}> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        const response = await window.gapi.client.youtube.channels.list({
            "part": [
                "snippet,contentDetails,statistics"
            ],
            "id": [
                channelId
            ]
        })

        return {data: response.result.items[0], error: null};
    }
}

export default YoutubeDataProvider;

