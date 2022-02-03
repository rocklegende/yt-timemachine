import axios, {AxiosResponse} from "axios";

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
    id:       ID;
    snippet?: Snippet;
    statistics?: YTVideoStatistics;
    contentDetails?: ContentDetails;
}

export interface ID {
    kind:    string;
    videoId: string;
}

export interface Snippet {
    publishedAt:          Date;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    liveBroadcastContent: string;
    publishTime:          Date;
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
    stars: 1 | 2 | 3 | 4 | 5;
}

export interface YTVideoStatistics {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
}

export interface RatingSummary {
    numTotalRatings: number;
    avgRating: number;
    ownRating?: Rating;
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

export interface VideoList {
    videos: [Video];
}

export class YoutubeDataProvider {

    STANDARD_LIST_PARAMETERS = {
        maxResults: 20
    };

    STANDARD_SEARCH_PARAMETERS = {
        maxResults: 20,
        // publishedBefore: "2014-01-28T15:04:32Z"
    }

    private loadClient = async () => {
        return new Promise((resolve, reject) => {
            gapi.load("client", resolve);
        })
    }

    private loadClientThenYoutube = async () => {
        if ("client" in window.gapi) {
            console.log("client was already loaded from a previous call, skip it")
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
        return items.map((item: Item) => item.id.videoId);
    }

    search = async (searchQuery: string, publishedBefore: string): Promise<any> => {
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

    getVideoStatistics = async (videoId: string): Promise<VideoStatistics> => {
        return {
            numViews: 8992001,
            ratingSummary: {
                avgRating: 3.4,
                numTotalRatings: 8439209,
            },
            videoLength: 300
        }
    }

    // getRandomVideos = async (beforeDate: number, numVideos: number = 10, category?: string): Promise<VideoList> =>  {
    //     // const response = await axios.get("https://random-data-api.com/api/stripe/random_stripe");
    //     // return response.data;
    //
    //     const fakeResponse = {
    //         "kind": "youtube#searchListResponse",
    //         "etag": "yUu9WlYO9b_rt2L6G2Of205ygWo",
    //         "nextPageToken": "CBkQAA",
    //         "regionCode": "DE",
    //         "pageInfo": {
    //             "totalResults": 1000000,
    //             "resultsPerPage": 25
    //         },
    //         "items": [
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "lhkfdM8fEPBLu900oa44Ve2IJtw",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "eIAu7SfeOD4"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-09-23T10:06:10Z",
    //                     "channelId": "UCV1yQuPS9ks9G2EenqsyHHA",
    //                     "title": "Ultimate Skateboarding on the Highway",
    //                     "description": "ドイツ警察、自動車道路をスケートボードで高速走行した男の行方追う ドイツの警察は、同国南部の自動車道路をスケートボードで時速１００ ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/eIAu7SfeOD4/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/eIAu7SfeOD4/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/eIAu7SfeOD4/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "alt2600",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-09-23T10:06:10Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "-_MY09WsRRIIoGOB5HzDddUpFX4",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "R8XAlSp838Y"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-06-13T05:36:14Z",
    //                     "channelId": "UCvtfT-xYX4Q-jC2Mbsk3OUA",
    //                     "title": "Skateboarding Dog - HD Redux",
    //                     "description": "10/27/15 Farewell Tillman RIP ** One year old Tillman the skateboarding bulldog from the iphone commercial. All clips are from ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/R8XAlSp838Y/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/R8XAlSp838Y/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/R8XAlSp838Y/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "RNickeyMouse",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-06-13T05:36:14Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "aKbvktV_B9BwkiQUqHauUT3-6z8",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "gUqnWX6KK7Y"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2007-11-15T19:04:19Z",
    //                     "channelId": "UC5NdNREP8NDXe9L84B-eu6Q",
    //                     "title": "Streetstyle in Tempe - 1986 Skateboarding Part 2",
    //                     "description": "NSA Pro-Streetstyle Skateboard Competition held at Diablo St.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/gUqnWX6KK7Y/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/gUqnWX6KK7Y/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/gUqnWX6KK7Y/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "rocketTENDON",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2007-11-15T19:04:19Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "VZF4M6j-rHwQbnVRsSyZ7qsgVCs",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "BTwjw9qiW90"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-09-01T01:27:25Z",
    //                     "channelId": "UC6VFsykv_IFfVKL44oLN7TQ",
    //                     "title": "Skateboarding Popsicle",
    //                     "description": "Broken nuts!",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/BTwjw9qiW90/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/BTwjw9qiW90/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/BTwjw9qiW90/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "mauxmcf",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-09-01T01:27:25Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "9cuIjLOKcQ0sOBpUpcvwpOTPjzI",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "9qjzlG79ViY"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-10-11T06:03:47Z",
    //                     "channelId": "UCVc8nFh0DCdC6kkYWVCRyhw",
    //                     "title": "Greatest Skateboarding Tricks",
    //                     "description": "Tricks in order: Jimmy Carlin - Double Nollie Heel Dan Nepscha - Fs double flip front board The Nuge - Huge Kickflip over gap ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/9qjzlG79ViY/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/9qjzlG79ViY/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/9qjzlG79ViY/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Burnt Cat",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-10-11T06:03:47Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "ndcxRbrW2VlxL2m7n0CovYqo-rQ",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "c-kTPhWV-zI"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-10-03T13:35:13Z",
    //                     "channelId": "UC_8-D3YsHzcpWBNvQToX02A",
    //                     "title": "Benny - Skateboard UH-AH-AH",
    //                     "description": "Die Skateboard-Welle war schon eine Weile in Deutschland angekommen, als man dem Thema einen deutschen Song gab.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/c-kTPhWV-zI/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/c-kTPhWV-zI/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/c-kTPhWV-zI/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "chanfangermany",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-10-03T13:35:13Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "SHHuT-1Ep3MQTNE4xX4BLIN4HQo",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "nPAZCpY9FWc"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-09-18T14:57:50Z",
    //                     "channelId": "UCDz_cp5BE-8pG9c9L7qvmVA",
    //                     "title": "Awesome 5 year old skateboarder",
    //                     "description": "Awesome video of 5 year old skateboarder. Schaeffer McLean filmed over one summer, travelling around some parks in the UK, ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/nPAZCpY9FWc/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/nPAZCpY9FWc/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/nPAZCpY9FWc/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Schaeffer McLean",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-09-18T14:57:50Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "_KXefNqtekmn9KurLvpVY5O77e0",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "CQzUsTFqtW0"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2007-06-28T22:01:10Z",
    //                     "channelId": "UCvtfT-xYX4Q-jC2Mbsk3OUA",
    //                     "title": "Skateboarding Dog",
    //                     "description": "10/27/15 Farewell Tillman RIP ** Tillman the skateboarding bulldog from the iphone commercial. All clips are from January 2007.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/CQzUsTFqtW0/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/CQzUsTFqtW0/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/CQzUsTFqtW0/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "RNickeyMouse",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2007-06-28T22:01:10Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "U6goQgedz5lOInjIveTtStV-2P8",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "1U-cgn3cEGA"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2006-03-12T15:06:33Z",
    //                     "channelId": "UCNJQ-5ylMt-tpJ4UOL8pgBg",
    //                     "title": "Best Of Rodney Mullen",
    //                     "description": "Rodney Mullen doing his amazing stuff. Sweet Home Alabama - Performed by ZoeAngel (a lot of people asked for a link to the ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/1U-cgn3cEGA/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/1U-cgn3cEGA/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/1U-cgn3cEGA/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Andorod",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2006-03-12T15:06:33Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "Vhnetda4PKhABp_f96qqOWgcijU",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "0uLY1FFKTqQ"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-01-19T09:46:55Z",
    //                     "channelId": "UCdp63gmoETbo2uLk58JaJzg",
    //                     "title": "How To Film Skateboarding",
    //                     "description": "UPDATED* GOOD SKATEBOARDING CAMERAS & EQUIPMENT ↓ ▻ GoPro Hero 8 BLACK: USA Link: https://amzn.to/3e4zlwR ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/0uLY1FFKTqQ/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/0uLY1FFKTqQ/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/0uLY1FFKTqQ/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "FrogyProd",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-01-19T09:46:55Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "-Vaxa2chiJeHcWVZ9L974XGxTm4",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "fLclGPr7fj4"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-11-20T06:52:56Z",
    //                     "channelId": "UCQ28fSp1FaTRCLhtDDSI0Bg",
    //                     "title": "Tillman the Skateboarding Bulldog Skates, Skimboards, and SURFS!!",
    //                     "description": "The Famous Tillman the Skateboarding Bulldog skateboards, skimboards, and SURFS! Amazing what he can do. For more ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/fLclGPr7fj4/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/fLclGPr7fj4/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/fLclGPr7fj4/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "ron davis",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-11-20T06:52:56Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "G4tCjwWmRC-MSFCngCWrQ_BYTBk",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "Unxi7DVT0Z0"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-05-18T20:16:55Z",
    //                     "channelId": "UCblfuW_4rakIf2h6aqANefA",
    //                     "title": "Hawaii skateboarding trip w/Decenzo, Deily and Webb",
    //                     "description": "Red Bull Skateboarding Ams Ryan Decenzo, Ron Deily, and Steven Webb take a trip to sunshiney Hawaii in search of the best ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/Unxi7DVT0Z0/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/Unxi7DVT0Z0/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/Unxi7DVT0Z0/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Red Bull",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-05-18T20:16:55Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "bxj-2vHTO3HIQYR51T3DmzXXOfE",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "con8ii2Bgys"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-06-12T13:10:01Z",
    //                     "channelId": "UCSpVHeDGr9UbREhRca0qwsA",
    //                     "title": "How to Learn the Basics of Skateboarding",
    //                     "description": "Full Playlist: https://www.youtube.com/playlist?list=PLLALQuK1NDrjsL__Q7HP2CaFU5gdkpwp7 - - Products for Gnarly Shredding ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/con8ii2Bgys/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/con8ii2Bgys/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/con8ii2Bgys/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Howcast",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-06-12T13:10:01Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "3bswBhuBbFxzLzpd2jH-XH8F9OU",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "dfBe8fOU5mw"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-10-08T08:31:19Z",
    //                     "channelId": "UCVMkDCBq3NlohMzJ2m6eTLg",
    //                     "title": "Department of Skateboarding Montage",
    //                     "description": "A few clips saved up.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/dfBe8fOU5mw/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/dfBe8fOU5mw/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/dfBe8fOU5mw/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Zak Allegri",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-10-08T08:31:19Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "ycL0qUM5F0jYORjziQa8R3-RcD8",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "3UjGsD0vWl0"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-02-20T20:17:41Z",
    //                     "channelId": "UCBk_TQq2ui_sobBFaNrUtgg",
    //                     "title": "Barely Dead: skateboarding vs. rollerblading",
    //                     "description": "Barely Dead - awesome video.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/3UjGsD0vWl0/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/3UjGsD0vWl0/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/3UjGsD0vWl0/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "s3tboard ru",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-02-20T20:17:41Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "Pg8LGjIH759rIFzsFstnw_5oRbE",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "URzAkL6m1lQ"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-05-31T02:40:37Z",
    //                     "channelId": "UCt16NSYjauKclK67LCXvQyA",
    //                     "title": "Thrasher Skateboard Magazine - Back to the Berg - Wallenberg 2009",
    //                     "description": "The most-anticipated skateboard event of the year did not disappoint. Almost a dozen never-been-done tricks went down the ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/URzAkL6m1lQ/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/URzAkL6m1lQ/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/URzAkL6m1lQ/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "ThrasherMagazine",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-05-31T02:40:37Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "7P1h64XrbY-ru49mP-LIL3jgOXU",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "B2U7EPqBqPY"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-12-23T23:20:31Z",
    //                     "channelId": "UCndIcuGJbaOdIBOZ7M6zJ1A",
    //                     "title": "Skateboarding Trick Tips | Hardflip",
    //                     "description": "SHOP HERE: ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/B2U7EPqBqPY/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/B2U7EPqBqPY/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/B2U7EPqBqPY/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Skate Warehouse",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-12-23T23:20:31Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "K3pafUuFOxhDGCJviRnc19Y1CQg",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "zk-5FCiKeTk"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-11-21T20:31:10Z",
    //                     "channelId": "UCSXWt3Q5KZPTo_3Xjh-gkVQ",
    //                     "title": "Kilian Martin: Freestyle Skateboarding",
    //                     "description": "After meeting skating against eachother in a freestyle competition, Kilian Martin and I decide to do our very first project together.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/zk-5FCiKeTk/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/zk-5FCiKeTk/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/zk-5FCiKeTk/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Brett Novak",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-11-21T20:31:10Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "hGvxq62iGQID11JQEpL8qDggAk4",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "h52rlkRSYU8"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-05-28T04:16:32Z",
    //                     "channelId": "UCccSjYPddLQXs0XHgH8HKQA",
    //                     "title": "Steve Caballero at age 14 Skateboarding",
    //                     "description": "Steve Caballero at age 14 Skateboarding in 1980.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/h52rlkRSYU8/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/h52rlkRSYU8/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/h52rlkRSYU8/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Todd Massengale",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-05-28T04:16:32Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "l9Z44pwWmxaxWCKzRMSDxcYTx4g",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "_Ifjwoztuz4"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-04-14T20:35:52Z",
    //                     "channelId": "UCXhAHm2n8LSAtyf6ATnoC2g",
    //                     "title": "The Christian Faith of Skateboarder Chad Tim Tim - CBN.com",
    //                     "description": "Professional skateboarder (for Element Skateboards) Chad Tim Tim tells how faith in Jesus Christ changed his life. The Christian ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/_Ifjwoztuz4/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/_Ifjwoztuz4/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/_Ifjwoztuz4/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "CBN - The Christian Broadcasting Network",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-04-14T20:35:52Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "ZsPwjUjJT44LX5Z2i4MDn6FOPCM",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "IGxL5Fr7ZcA"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2007-10-15T11:49:59Z",
    //                     "channelId": "UCP3EX5VKeaG4Oa2qTKPuEFA",
    //                     "title": "The Offspring -  Skateboarding - Take it Like a Man",
    //                     "description": "From the Offspring DVD Americana LISTEN Spotify: http://bit.ly/TheOffspringSpotify Apple Music: ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/IGxL5Fr7ZcA/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/IGxL5Fr7ZcA/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/IGxL5Fr7ZcA/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "The Offspring",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2007-10-15T11:49:59Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "veVCQcsQBzrLQYnGA7y43eWq7F8",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "UMg44qXLaNw"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2006-07-08T00:21:51Z",
    //                     "channelId": "UCQkTD38D3Urh7iV8Xzu-wTg",
    //                     "title": "How To Be Awesome At Skateboarding",
    //                     "description": "",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/UMg44qXLaNw/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/UMg44qXLaNw/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/UMg44qXLaNw/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "pampky123",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2006-07-08T00:21:51Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "SQGNZ4alk1p-vyLA6xQi_xYX260",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "ACu9_r0uN2o"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-04-07T21:59:25Z",
    //                     "channelId": "UC2jAMPK5PZ7_-4WulaXCawg",
    //                     "title": "Original Freestyle Skateboarding New York City",
    //                     "description": "3 hours of freestyle skateboarding with Original Skateboards' Sean Burke. Visit us online: http://www.originalskateboards.com.",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/ACu9_r0uN2o/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/ACu9_r0uN2o/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/ACu9_r0uN2o/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Original Skateboards",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-04-07T21:59:25Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "c5_ZAs70UotTzArymyI-9pApHWs",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "urq0Tmq1iDE"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2009-07-30T23:08:24Z",
    //                     "channelId": "UCf0xDKuXBtWoaY60Em5tP6A",
    //                     "title": "skateboarding broken ankle",
    //                     "description": "the day i broke my ankle. was just goofing around with my friend, not doing anything serious and then this happens. BTW its not ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/urq0Tmq1iDE/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/urq0Tmq1iDE/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/urq0Tmq1iDE/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "no",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2009-07-30T23:08:24Z"
    //                 }
    //             },
    //             {
    //                 "kind": "youtube#searchResult",
    //                 "etag": "r15O0913vxJzfr0Ej4Bti2Gh8zc",
    //                 "id": {
    //                     "kind": "youtube#video",
    //                     "videoId": "7pHwkbDx_34"
    //                 },
    //                 "snippet": {
    //                     "publishedAt": "2008-11-12T18:17:15Z",
    //                     "channelId": "UCf9ZbGG906ADVVtNMgctVrA",
    //                     "title": "Skateboarding the World&#39;s Smallest Country: Red Bull All Access",
    //                     "description": "For more All Access visit http://win.gs/1fJrW4w Until now no outsiders has been granted free access to the worlds smallest nation, ...",
    //                     "thumbnails": {
    //                         "default": {
    //                             "url": "https://i.ytimg.com/vi/7pHwkbDx_34/default.jpg",
    //                             "width": 120,
    //                             "height": 90
    //                         },
    //                         "medium": {
    //                             "url": "https://i.ytimg.com/vi/7pHwkbDx_34/mqdefault.jpg",
    //                             "width": 320,
    //                             "height": 180
    //                         },
    //                         "high": {
    //                             "url": "https://i.ytimg.com/vi/7pHwkbDx_34/hqdefault.jpg",
    //                             "width": 480,
    //                             "height": 360
    //                         }
    //                     },
    //                     "channelTitle": "Red Bull Skateboarding",
    //                     "liveBroadcastContent": "none",
    //                     "publishTime": "2008-11-12T18:17:15Z"
    //                 }
    //             }
    //         ]
    //     }
    //     return fakeResponse.items;
    // }

    getVideosFromChannel = async (channelId: string): Promise<Item[]> => {
        await this.loadClientThenYoutube();
        //@ts-ignore youtube gets injected dynamically therefore TS will throw an error here
        let {result} = await window.gapi.client.youtube.search.list({
            ...this.STANDARD_SEARCH_PARAMETERS,
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

    getVideosRelatedToVideo = async (videoId: string): Promise<Item[]> => {
        // 1. make search request to google api with videoId as relatedToVideoId

        await this.loadClientThenYoutube();
        //@ts-ignore youtube gets injected dynamically therefore TS will throw an error here
        let {result} = await window.gapi.client.youtube.search.list({
            ...this.STANDARD_SEARCH_PARAMETERS,
            "part": [
                "snippet, id"
            ],
            "relatedToVideoId": videoId,
            "type": [
                "video"
            ]
        });
        let videoIds = this.mapItemsToIds(result.items);

        // 2. request more information for received videos via videos

        //@ts-ignore
        let videosWithMoreInfo: Item[] = await this.getMoreInfoAboutVideos(videoIds);
        return videosWithMoreInfo;


        // 3. contact own Rating system for rating for this video
        // TODO

        // combine everything into a single VideoList
        // TODO
    }

    getMoreInfoAboutVideos = async (videoIds: string[], parts=["id", "snippet", "contentDetails", "statistics"]): Promise<Item[]> => {
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



    createComment = (videoId: string, comment: string) => {

    }
    deleteComment = (commentId: string) => {

    }
    editComment = (commentId: string, newComment: string) => {

    }
    getCommentsForVideo = (videoId: string) => {

    }

    createRating = async (videoId: string, rating: Rating) => {

    }

    getRatingSummary = async (videoId: string): Promise<RatingSummary> => {
        return {
            avgRating: 3.4,
            numTotalRatings: 92202,
            ownRating: {
                stars: 3
            }
        };
    }


}

