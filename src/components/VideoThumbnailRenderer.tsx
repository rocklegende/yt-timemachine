import {Item} from "../providers/youtubeDataProvider";
import {Link} from "react-router-dom";
import {processYoutubeDurationString, processYoutubeViewCount} from "../helpers/helper";

type VideoThumbnailRendererMode = "overlay" | "aside"

type VideoThumbnailRendererProps = {
    item: Item;
    mode: VideoThumbnailRendererMode;
}

const VideoThumbnailRenderer: React.FC<VideoThumbnailRendererProps> = ({item, mode}) => {
    const videoTitle = item.snippet!.title!;
    const videoLength = processYoutubeDurationString(item.contentDetails?.duration!);
    const channelTitle = item.snippet?.channelTitle;
    const videoId = item.id;
    const thumbnail = item.snippet!.thumbnails!.high.url;
    const viewCount = processYoutubeViewCount(item.statistics?.viewCount!);

    return (
        <div className={"video-thumbnail-renderer"}>
            <Link to={`/video/${videoId}`} className={"black-link"}>
                <div className={"video-thumbnail-renderer-overlay"}>
                    <img src={thumbnail} alt={`thumbnail-${videoTitle}`}/>
                    <div className={"image-overlay"}></div>
                    <div className={"video-thumbnail-details"}>
                        <span className={"channel-title"}>{channelTitle} &#183; {viewCount} views</span>
                        <div className={"video-length-and-title-container"}>
                            <span className={"video-thumbnail-title max-lines"}>{videoTitle}</span>
                            <span className={"video-length"}>{videoLength}</span>
                        </div>

                    </div>
                </div>
            </Link>

        </div>
    )
}

export default VideoThumbnailRenderer;