import {Item} from "../providers/youtubeDataProvider";
import {Collapse} from "reactstrap";
import React, {FunctionComponent, useState} from "react";
import VideoList from "./VideoList";

type CollapsableVideoListProps = {
    items: Item[];
    title: string;
    collapsed: boolean;
}

const CollapsableVideoList: FunctionComponent<CollapsableVideoListProps> = ({
    items,
    title,
    collapsed
 }) => {
    const [isCollapsed, setCollapsed] = useState(collapsed);

    return (
        <>
            <h2 onClick={() => setCollapsed(!isCollapsed)}>
                <i
                    className={`fa-solid fa-chevron-right ${!isCollapsed ? "rotate-90" : ""}`}
                    style={{marginRight: "0.5rem"}}>

                </i>
                {title}
            </h2>
            <Collapse isOpen={!isCollapsed}>
                <VideoList items={items}/>
            </Collapse>
        </>
    )
}

export default CollapsableVideoList;