import {Item} from "./youtubeDataProvider";
import React, {FunctionComponent} from "react";
import {processYoutubeDurationString, processYoutubeViewCount} from "./helper";
import {Link} from "react-router-dom";

export type VideoListProps = {
    items: Item[];
}

const VideoList: FunctionComponent<VideoListProps> = ({items}) => {
    return (
        <div className={"video-list"} >
            {items.map((video: Item) => (
                <div className={"video-list-item"}>
                    <Link to={`/video/${video.id}`} style={{height: "100%"}}>
                        <img
                            className="video-list-item-picture"
                            src={video.snippet?.thumbnails!.high.url}
                        />
                    </Link>

                    <div className={"video-list-item-description"}>
                        <Link to={`/video/${video.id}`} >
                            {video.snippet?.title!}
                        </Link>
                        <br></br>
                        <span>{processYoutubeDurationString(video.contentDetails?.duration!)} <strong>From: </strong> <a href={"https://www.google.com"}>{video.snippet?.channelTitle}</a> </span>
                        <br></br>
                        <span><strong>Views:</strong> {processYoutubeViewCount(video.statistics?.viewCount!)}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VideoList;