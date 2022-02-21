import React, {useEffect, useState} from "react";
import {useData} from "./DataContextProvider";
import {showErrorMessage} from "../helpers/helper";
import moment from "moment";

type CreatorInfoBoxProps = {
    channelId: string;
}

const CreatorInfoBox:React.FC<CreatorInfoBoxProps> = ({channelId}) => {

    const [channelInfo, setChannelInfo] = useState<any>();
    const dataProvider = useData().dataProvider;

    const fetchAndSetChannelInfo = async () => {
        const {data, error} = await dataProvider.getChannelInformation(channelId);
        if (error) showErrorMessage("Error loading channel information")
        if (data) setChannelInfo(data);
    }

    useEffect(() => {
        fetchAndSetChannelInfo();
    }, [])

    return (
        <div className={"creator-info-box"} >
            {channelInfo && (
            <>
                <div className={"creator-info-box-header"}>
                     <div className={"creator-info-box-channel-details"}>
                        <img src={channelInfo.snippet?.thumbnails.medium.url}/>
                        <div className={"creator-info-box-description"}>
                            <span>From: <a href={`https://www.youtube.com/channel/${channelId}`}>{channelInfo.snippet?.title}</a></span>
                            <br/>
                            <span>Joined: {moment(channelInfo.snippet?.publishedAt).format('MMMM Do YYYY')}</span>
                            <br/>
                            <span>Videos: {channelInfo.statistics?.videoCount}</span>
                        </div>
                    </div>
                </div>
                <div className={"creator-info-box-body"}>
                    <p>
                        {channelInfo.snippet?.description.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')}
                    </p>
                </div>
            </>)}
        </div>
    )
}

export default CreatorInfoBox;