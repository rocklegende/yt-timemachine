import {FunctionComponent, useEffect, useState} from "react";
import {useData} from "./DataContextProvider";
import {Item} from "../providers/youtubeDataProvider";
import {showErrorMessage} from "../helpers/helper";
import '../styles/videoGridStyles.scss';
import VideoThumbnailRenderer from "./VideoThumbnailRenderer";

type VideoRecommendationGridProps = {
    categoryId: string;
    title: string;
    firstElementAsHero?: boolean;
}

const VideoRecommendationSection: FunctionComponent<VideoRecommendationGridProps>
    = ({categoryId, title, firstElementAsHero}) => {
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;

    const [videos, setVideos] = useState<Item[]>([]);
    const fetchAndSetVideos = async () => {
        if (categoryId === "latest") {
            const {data, error} = await dataProvider.getLatestVideos();
            if (error) console.error(error)
            if (data) setVideos(data);
            return;
        }

        const {data, error} = await dataProvider.getVideosFromCategory(title, "mostPopular");
        if (error) {
            showErrorMessage(`Error fetching video for category ${title}`);
            return;
        }
        if (data) setVideos(data);
    }

    useEffect(() => {
        fetchAndSetVideos();
        const listener = dataProvider.addChangeListener((newYear: number) => fetchAndSetVideos())

        return () => {
            dataProvider.removeChangeListener(listener);
        }
    }, [])

    return (
        <div className={`${"video-recommendation-section"}`}>
            <h2 className={"video-recommendation-section-title"}>{title}</h2>
            <div className={"video-grid"}>
                {videos.map((video, index) => (
                    <div key={index} className={`video-grid-element ${(firstElementAsHero && index === 0) ? "video-grid-element-hero" : ""}`}>
                        <VideoThumbnailRenderer
                        item={video}
                        mode={"overlay"}
                        />
                    </div>
                    )
                )}
            </div>
        </div>
    )
}

VideoRecommendationSection.defaultProps = {
    firstElementAsHero: false,
}

export default VideoRecommendationSection;