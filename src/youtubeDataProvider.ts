import {mockVideoItems} from "./__mocks__/mockData";
import {
    _createComment,
    _createRating,
    _getCommentsForVideo,
    _getCommmentsCount,
    _getRatingSummary,
    _updateRating
} from "./customApiLayer";
import {PostgrestError, PostgrestResponse} from "@supabase/supabase-js";
import {DataContextChangeListener, IDataProvider} from "./interfaces/IDataProvider";
import moment from "moment";
import {findWordsRelatedTo} from "./relatedWordsHelper";

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

export interface VideoList {
    videos: [Video];
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

    async getLatestVideos(): Promise<Item[]> {
        await this.loadClientThenYoutube();

        console.log(this.getCurrentDateAsUTC(7));
        console.log(this.getCurrentDateAsUTC());
        //@ts-ignore
        let {result} = await window.gapi.client.youtube.search.list({
            "maxResults": 9,
            "publishedAfter": this.getCurrentDateAsUTC(7),
            "publishedBefore": this.getCurrentDateAsUTC(),
            "part": [
                "snippet, id"
            ],
            "type": [
                "video"
            ]
        });
        let videoIds = this.mapItemsToIds(result.items);
        return this.getMoreInfoAboutVideos(videoIds);
    }

    async getRandomVideos (beforeDate: number, category?: string): Promise<Item[]>  {
        return mockVideoItems;
    }

    async getVideosFromChannel (channelId: string): Promise<Item[]> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        let {result} = await window.gapi.client.youtube.search.list({
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
        let videoIds = this.mapItemsToIds(result.items);
        return this.getMoreInfoAboutVideos(videoIds);

    }

    async getVideosRelatedToVideo(videoId: string): Promise<Item[]> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        let {result} = await window.gapi.client.youtube.search.list({
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
        let videoIds = this.mapItemsToIds(result.items);

        //@ts-ignore
        let videosWithMoreInfo: Item[] = await this.getMoreInfoAboutVideos(videoIds);
        return videosWithMoreInfo;
    }

    async getVideosRelatedToTags(tags: string[]): Promise<Item[]> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        let {result} = await window.gapi.client.youtube.search.list({
            "part": [
                "snippet,id"
            ],
            "maxResults": this.STANDARD_SEARCH_PARAMETERS.maxResults,
            "publishedBefore": this.getCurrentDateAsUTC(),
            "q": tags[0]
        });


        let videoIds = this.mapItemsToIds(result.items);

        //@ts-ignore
        let videosWithMoreInfo: Item[] = await this.getMoreInfoAboutVideos(videoIds);
        return videosWithMoreInfo;
    }

    async getMoreInfoAboutVideos (
        videoIds: string[],
        parts=["id", "snippet", "contentDetails", "statistics"]
    ): Promise<Item[]> {
        await this.loadClientThenYoutube();
        //@ts-ignore
        const response = await window.gapi.client.youtube.videos.list({
            ...this.STANDARD_LIST_PARAMETERS,
            "part": [
                parts.join(",")
            ],
            "id": videoIds
        });
        return response.result.items;
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

    async getVideosFromCategory(title: string, chart: Chart): Promise<any> {
        await this.loadClientThenYoutube();

        const relatedWordsToCategory = findWordsRelatedTo(title);
        //@ts-ignore
        const {result} = await window.gapi.client.youtube.search.list({
            "part": [
                "id,snippet"
            ],
            "maxResults": 8,
            "q": relatedWordsToCategory.join("|"),
            "publishedBefore": this.getCurrentDateAsUTC(),
        });

        let videoIds = this.mapItemsToIds(result.items);

        //@ts-ignore
        let videosWithMoreInfo: Item[] = await this.getMoreInfoAboutVideos(videoIds);

        return {data: videosWithMoreInfo, error: null};


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
}

export default YoutubeDataProvider;

