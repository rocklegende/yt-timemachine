import React, {useCallback, useEffect, useState} from 'react';
import '../styles/App.scss';
import {Item, Rating, RatingSummary, VideoStatistics} from "../providers/youtubeDataProvider";
import YouTube, {YouTubeProps, Options, PlayerVars} from "react-youtube";
import {useAuth} from "./AuthContextProvider";
import {RatingView} from "./Rating";
import {processYoutubeViewCount, showErrorMessage, showSuccessMessage} from "../helpers/helper";
import CommentSection from "./CommentSection";
import CollapsableVideoList from "./CollapsableVideoList";
import {useParams} from "react-router-dom";
import {useData} from "./DataContextProvider";
import CreatorInfoBox from "./CreatorInfoBox";


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
            if (!res.data || (res.data && res.data.length === 0) ) {
                return;
            }

            let videoItem = res.data[0];
            setCurrentVideoItem(videoItem);

            let _relatedVideosResponse = await dataProvider.getVideosRelatedToTags(videoItem.snippet!.tags || []);
            if (_relatedVideosResponse.error) {
                console.error(_relatedVideosResponse.error);
            }
            if (_relatedVideosResponse.data) {
                setRelatedVideos(_relatedVideosResponse.data.filter(item => item.id !== videoId));
            }

            let _moreVideosFromChannelResponse = await dataProvider.getVideosFromChannel(videoItem.snippet?.channelId!);
            if (_moreVideosFromChannelResponse.error) {
                console.error(_moreVideosFromChannelResponse.error);
            }
            if (_moreVideosFromChannelResponse.data) {
                setMoreVideosFromChannel(_moreVideosFromChannelResponse.data.filter(item => item.id !== videoId));
            }
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
                        <div className={"tab-element"}>
                            <RatingView
                                value={ Math.floor(ratingSummary?.avgStars || 0)}
                                ratable={true}
                                ratingSummary={ratingSummary}
                                viewCount={getViewCount()}
                                onRatingChanged={(stars: number) => handleRatingChanged(stars)}
                            />
                        </div>
                        <CommentSection videoId={currentVideoId} />
                    </div>
                    <div className={"secondary-tab"}>
                        {currentVideoItem.snippet && (<CreatorInfoBox channelId={currentVideoItem.snippet.channelId} />)}

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
