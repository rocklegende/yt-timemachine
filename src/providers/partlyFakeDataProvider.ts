import {mockCategories, mockCategoryItems, mockVideoItems} from "../__mocks__/mockData";
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
import {DataContextChangeListener, IDataProvider} from "../interfaces/IDataProvider";
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

    async getLatestVideos(): Promise<{data: Item[] | null, error: string | null}> {
        return {data: mockVideoItems.slice(0,9), error: null};
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

    async getVideosFromChannel (channelId: string): Promise<{data: Item[] | null, error: string | null}> {
        return {data: mockVideoItems, error: null};
    }

    async getVideosRelatedToVideo(videoId: string): Promise<{data: Item[] | null, error: string | null}> {

        return {data: mockVideoItems, error: null}
    }

    async getVideosRelatedToTags(tags: string[]): Promise<{data: any[] | null, error: string | null}> {
        return {data: mockVideoItems, error: null};
    }

    async getMoreInfoAboutVideos (videoIds: string[], parts=["id", "snippet", "contentDetails", "statistics"]): Promise<{data: any[] | null, error: string | null}> {
        return {data: mockVideoItems, error: null};
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
    async getCommentsForVideo (videoId: string, pageNumber: number): Promise<{ commentsPageCount: number | null, data: YTComment[] | null, error: any | null}> {
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

    async getChannelInformation(channelId: string): Promise<{data: any, error: string | null}> {
        return {data: {
                "kind": "youtube#channel",
                "etag": "kUWN8CoOfBHXcJg6_pw0DsF8JNI",
                "id": "UCSju5G2aFaWMqn-_0YBtq5A",
                "snippet": {
                    "title": "Stand-up Maths",
                    "description": "I do mathematics and stand-up. Sometimes simultaneously. Occasionally while being filmed. (It's quite the Venn diagram.)\n\nPrinciple channel supporter: Jane Street\nhttps://www.janestreet.com/\n\nhttp://standupmaths.com\nhttp://twitter.com/standupmaths",
                    "publishedAt": "2009-09-10T10:58:11Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLSI-MIIQpPpDJkuXEkMnjnh6E1_WBsPkSutUjW0hA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLSI-MIIQpPpDJkuXEkMnjnh6E1_WBsPkSutUjW0hA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AKedOLSI-MIIQpPpDJkuXEkMnjnh6E1_WBsPkSutUjW0hA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Stand-up Maths",
                        "description": "I do mathematics and stand-up. Sometimes simultaneously. Occasionally while being filmed. (It's quite the Venn diagram.)\n\nPrinciple channel supporter: Jane Street\nhttps://www.janestreet.com/\n\nhttp://standupmaths.com\nhttp://twitter.com/standupmaths"
                    },
                    "country": "GB"
                },
                "contentDetails": {
                    "relatedPlaylists": {
                        "likes": "",
                        "uploads": "UUSju5G2aFaWMqn-_0YBtq5A"
                    }
                },
                "statistics": {
                    "viewCount": "102047107",
                    "subscriberCount": "982000",
                    "hiddenSubscriberCount": false,
                    "videoCount": "228"
                }
            }, error: null};
    }
}

export default PartlyFakeDataProvider;