import {FunctionComponent, useEffect, useState} from "react";
import {useData} from "./DataContextProvider";
import {Item} from "./youtubeDataProvider";
import {showErrorMessage} from "./helper";
import './videoGridStyles.scss';
import {Link} from "react-router-dom";
import VideoThumbnailRenderer from "./VideoThumbnailRenderer";
import {findWordsRelatedTo} from "./relatedWordsHelper";

type VideoRecommendationGridProps = {
    categoryId: string;
    title: string;
    firstElementAsHero?: boolean;
}

const VideoRecommendationSection: FunctionComponent<VideoRecommendationGridProps>
    = ({categoryId, title, firstElementAsHero}) => {
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;
    console.log(findWordsRelatedTo(title));
    console.log(firstElementAsHero);

    const [videos, setVideos] = useState<Item[]>([]);
    const fetchAndSetVideos = async () => {
        if (categoryId === "latest") {
            const videos = await dataProvider.getLatestVideos();
            setVideos(videos);
            return;
        }

        const {data, error} = await dataProvider.getVideosFromCategory(title, "mostPopular");
        if (error) {
            showErrorMessage(`Error fetching video for category ${title}`)
        }
        setVideos(data);
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
                    <div className={`video-grid-element ${(firstElementAsHero && index === 0) ? "video-grid-element-hero" : ""}`}>
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