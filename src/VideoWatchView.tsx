import React, {useCallback, useEffect, useState} from 'react';
import './App.scss';
import {Item, Rating, RatingSummary, VideoStatistics} from "./youtubeDataProvider";
import YouTube, {YouTubeProps, Options, PlayerVars} from "react-youtube";
import {useAuth} from "./AuthContextProvider";
import {RatingView} from "./Rating";
import {processYoutubeViewCount, showErrorMessage, showSuccessMessage} from "./helper";
import CommentSection from "./CommentSection";
import CollapsableVideoList from "./CollapsableVideoList";
import {useParams} from "react-router-dom";
import {useData} from "./DataContextProvider";


function VideoWatchView() {
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;
    const auth = useAuth();
    let { videoId } = useParams();
    const currentVideoId = videoId!

    const [relatedVideos, setRelatedVideos] = useState<Item[]>([]);
    const [moreVideosFromChannel, setMoreVideosFromChannel] = useState<Item[]>([]);
    const [currentVideoItem, setCurrentVideoItem] = useState<Item | null>(null);
    const [ratingSummary, setRatingSummary] = useState<RatingSummary | undefined>(undefined);

    const playerBla: PlayerVars = {
        autoplay: 1,
        modestbranding: 1
    }

    const opts = {
        playerVars: playerBla
    };
    const [playerOptions, setPlayerOptions] = useState<Options>(opts);

    const getRatings = async () => {
        const ratingSummary = await dataProvider.getRatingSummary(currentVideoId, auth.user?.id);
        setRatingSummary(ratingSummary);
    }

    const getViewCount = (): string => {
        if (!currentVideoItem?.statistics) {
            return "0";
        }

        if (!currentVideoItem.statistics.viewCount) {
            return "0";
        }

        return processYoutubeViewCount(currentVideoItem.statistics.viewCount);
    }

    const handleRatingChanged = async (stars: number) => {
        if (!auth.user) {
            console.error("cant create a rating with no logged in user!")
            return;
        }
        const rating = {
            videoId: currentVideoId,
            userId: auth.user.id,
            stars: stars
        }

        const {data, error} = (ratingSummary?.ownGivenStars)
            ? await dataProvider.updateRating(rating)
            : await dataProvider.createRating(rating);
        if (error) {
            showErrorMessage(error.message);
            return;
        }
        getRatings();
    }

    useEffect(() => {
        const getMoreInformationAboutVideoFromUrl = async () => {
            let res = await dataProvider.getMoreInfoAboutVideos([currentVideoId]);
            if (res.length === 0) {
                return;
            }

            let videoItem = res[0];
            setCurrentVideoItem(videoItem);

            let _relatedVideos: Item[] = await dataProvider.getVideosRelatedToTags(videoItem.snippet!.tags || []);
            setRelatedVideos(_relatedVideos);

            let _moreVideosFromChannel: Item[] = await dataProvider.getVideosFromChannel(videoItem.snippet?.channelId!);
            setMoreVideosFromChannel(_moreVideosFromChannel);
        }

        getMoreInformationAboutVideoFromUrl();
    }, [currentVideoId, videoId])

    useEffect(() => {
        getRatings();
    }, [currentVideoId, videoId, auth])

    return (
        <div className={"watch-video-view"}>
            {currentVideoItem && (
                <>
                    <div className={"primary-tab"} >
                        <YouTube
                            className={"videoplayer"}
                            videoId={currentVideoId}
                            opts={playerOptions}
                        />
                        <div className={"tab-element video-statistics"}>
                            <RatingView
                                ratingCount={ratingSummary?.numTotalRatings}
                                value={ Math.floor(ratingSummary?.avgStars || 0)}
                                ratable={true}
                                onRatingChanged={(stars: number) => handleRatingChanged(stars)}
                            />
                            <span>You rated {ratingSummary?.ownGivenStars} stars </span>
                            <span>Views: {getViewCount()}</span>
                        </div>
                        <CommentSection videoId={currentVideoId} />
                    </div>
                    <div className={"secondary-tab"}>
                        <div className={"creator-info-box"} >
                            <div className={"creator-info-box-header"}>
                                <div className={"creator-info-box-channel-details"}>
                                    <img src={currentVideoItem.snippet!.thumbnails.medium.url}/>
                                    <div className={"creator-info-box-description"}>
                                        <span>From: <a href={"https://www.google.com"}>{currentVideoItem.snippet?.channelTitle}</a></span>
                                        <br/>
                                        <span>Joined: 10 years ago</span>
                                        <br/>
                                        <span>Videos: 28</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CollapsableVideoList
                            items={moreVideosFromChannel}
                            title={`More From: ${currentVideoItem.snippet?.channelTitle}`}
                            collapsed={true}
                        />

                        <CollapsableVideoList
                            items={relatedVideos}
                            title={"Related videos"}
                            collapsed={false}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default VideoWatchView;
