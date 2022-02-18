import {mockCategories, mockCategoryItems, mockVideoItems} from "./__mocks__/mockData";
import {Chart, Item, Rating, RatingSummary, YTComment} from "./youtubeDataProvider";
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

/*
Class that partly fakes the interaction with the backend.
Every communication with youtube data api is mocked, but
interaction with supabase api is not. Useful for not exceeding quota of google cloud in development.
 */
class PartlyFakeDataProvider implements IDataProvider {

    year: number = 2012;

    constructor(year: number) {
        this.year = year;
    }

    async getLatestVideos(): Promise<Item[]> {
        return mockVideoItems.slice(0,9);
    }

    get_published_before_utc_string() {
        return moment.utc(this.getCurrentDate()).format();
    }

    addChangeListener(callback: (newYear: number) => void): DataContextChangeListener {
        return {callback: newYear => {}}
    }

    removeChangeListener(listener: DataContextChangeListener) {
        return null;
    }

    changeYear(newYear: number) {
        this.year = newYear;
    }

    STANDARD_LIST_PARAMETERS = {
        maxResults: 20
    };

    STANDARD_SEARCH_PARAMETERS = {
        maxResults: 20,
        publishedBefore: "2014-01-28T15:04:32Z"
    }

    async search (searchQuery: string, publishedBefore: string): Promise<any> {

    }

    getRandomVideos = async (beforeDate: number, category?: string): Promise<Item[]> =>  {
        return mockVideoItems;
    }

    async getVideosFromChannel (channelId: string): Promise<Item[]> {
        return mockVideoItems;
    }

    async getVideosRelatedToVideo(videoId: string): Promise<Item[]> {

        return new Promise((resolve, reject) => {
            resolve(mockVideoItems);
        })

        // 3. contact own Rating system for rating for this video
        // TODO

        // combine everything into a single VideoList
        // TODO
    }

    async getVideosRelatedToTags(tags: string[]): Promise<Item[]> {
        return mockVideoItems;
    }

    async getMoreInfoAboutVideos (videoIds: string[], parts=["id", "snippet", "contentDetails", "statistics"]): Promise<Item[]> {
        return mockVideoItems;
    }

    async createComment (comment: YTComment): Promise<{data: any[] | null, error: PostgrestError | null}> {
        return _createComment(comment);
    }
    async deleteComment (commentId: string): Promise<{data: any[] | null, error: PostgrestError | null}> {
        return {data: null, error: null}
    }
    async editComment (commentId: string, newComment: string): Promise<{data: any[] | null, error: PostgrestError | null}> {
        return {data: null, error: null}
    }
    async getCommentsForVideo (videoId: string, pageNumber: number): Promise<{data: YTComment[] | null, error: any | null}> {
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
        return {data: mockCategoryItems, error: null}
    }
    async getCategories(): Promise<any> {
        return {data: mockCategories, error: null}
    }

    getCurrentDate(): moment.Moment {
        const years_diff_from_now: number = moment().diff(`${(this.year)}-01-01`, 'years');
        return moment().subtract(years_diff_from_now, 'years')
    }
}

export default PartlyFakeDataProvider;