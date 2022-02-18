import {PostgrestError, PostgrestResponse} from "@supabase/supabase-js";
import {Chart, Item, Rating, RatingSummary, YTComment} from "../youtubeDataProvider";

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
    getVideosFromChannel (channelId: string): Promise<Item[]>;
    getVideosRelatedToVideo(videoId: string): Promise<Item[]>;
    getVideosRelatedToTags(tags: string[]): Promise<Item[]>;
    getMoreInfoAboutVideos (videoIds: string[], parts?: string[]): Promise<Item[]>;
    createComment (comment: YTComment):  Promise<{data: any[] | null, error: PostgrestError | null}>;
    deleteComment (commentId: string):  Promise<{data: any[] | null, error: PostgrestError | null}>;
    editComment (commentId: string, newComment: string): Promise<{data: any[] | null, error: PostgrestError | null}>;
    getCommentsForVideo (videoId: string, pageNumber: number): Promise<{data: any[] | null, error: PostgrestError | null}>;
    getRatingSummary (videoId: string, userId?: string): Promise<RatingSummary>;
    updateRating (rating: Rating): Promise<PostgrestResponse<any>>;
    createRating(rating: Rating): Promise<PostgrestResponse<any>>;
    getCommentsCount(videoId: string): Promise<PostgrestResponse<number>>;
    getVideosFromCategory(title: string, chart: Chart): Promise<any>;
    getCategories(): Promise<any>;
    getLatestVideos(): Promise<Item[]>;

}