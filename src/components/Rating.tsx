import React, {FC, FormEvent, useEffect} from "react";
import {useAuth} from "./AuthContextProvider";
import {showErrorMessage} from "../helpers/helper";
import {RatingSummary} from "../providers/youtubeDataProvider";

type RatingProps = {
    value: number,
    ratable: boolean,
    onRatingChanged: (stars: number) => void,
    viewCount: string | undefined,
    ratingSummary: RatingSummary| undefined
}

const RatingIcon = () => <i className="rating__icon rating__icon--star fa fa-star"></i>

export const RatingView: FC<RatingProps>
    = ({
           value,
           ratable,
           onRatingChanged,
           viewCount,
           ratingSummary
    }) => {
    const valueChanged = (event: any) => {
        onRatingChanged(event.target.value);
    }

    const auth = useAuth();

    const handleMouseOver = (event: any) => {
        if (ratable && !auth.user) {
            const tooltip = document.getElementById("login-to-rate-tooltip");
            if (tooltip) {
                tooltip.style.display = "inline";
            }
        }
    };

    const handleMouseExit = (event: any) => {
        if (ratable && !auth.user) {
            const tooltip = document.getElementById("login-to-rate-tooltip");
            if (tooltip) {
                tooltip.style.display = "none";
            }
        }
    };

    const ratingGroups = document.getElementsByClassName("rating-group");
    useEffect(() => {

        if (ratingGroups.length > 0) {
            // @ts-ignore
            ratingGroups.item(0).addEventListener("mouseover", handleMouseOver, false);
            // @ts-ignore
            ratingGroups.item(0).addEventListener("mouseleave", handleMouseExit, false);
        }

        return () => {
            if (ratingGroups.length > 0) {
                //@ts-ignore
                ratingGroups.item(0).removeEventListener("mouseover",  handleMouseOver, false);
                //@ts-ignore
                ratingGroups.item(0).removeEventListener("mouseleave", handleMouseExit, false);
            }
        }
    })

    return (
        <div className={"video-statistics"}>
            <div className={"video-statistics-primary-row"}>
                <div className={"rating"}>
                    <span><strong>Rate:</strong> </span>
                    <div id="full-stars-example-two">
                        <div className={`rating-group ${!ratable ? "disabled" : ""}`} onChange={(event) => valueChanged(event)}>
                            <label aria-label="1 star" className="rating__label" htmlFor="rating3-1"><RatingIcon/></label>
                            <input readOnly className={`rating__input ${!ratable ? "disabled" : ""}`} name="rating3" id="rating3-1" value="1" type="radio" disabled={!ratable} checked={value === 1}/>
                            <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><RatingIcon/></label>
                            <input readOnly className={`rating__input ${!ratable ? "disabled" : ""}`} name="rating3" id="rating3-2" value="2" type="radio" disabled={!ratable} checked={value === 2}/>
                            <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><RatingIcon/></label>
                            <input readOnly className={`rating__input ${!ratable ? "disabled" : ""}`} name="rating3" id="rating3-3" value="3" type="radio" disabled={!ratable} checked={value === 3}/>
                            <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><RatingIcon/></label>
                            <input readOnly className={`rating__input ${!ratable ? "disabled" : ""}`} name="rating3" id="rating3-4" value="4" type="radio" disabled={!ratable} checked={value === 4}/>
                            <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><RatingIcon/></label>
                            <input readOnly className={`rating__input ${!ratable ? "disabled" : ""}`} name="rating3" id="rating3-5" value="5" type="radio" disabled={!ratable} checked={value === 5}/>
                        </div>
                    </div>

                    <span>{ratingSummary?.numTotalRatings ? `${ratingSummary.numTotalRatings.toLocaleString("en-US")} ratings` : "no ratings yet"}</span>

                </div>
                <div className={"view-count"}>
                    <span>Views: {viewCount}</span>
                </div>
            </div>
            <div className={"video-statistics-secondary-row"}>
                <span id="login-to-rate-tooltip" >Login to rate! </span>
                {ratingSummary?.ownGivenStars && (<span>You rated {ratingSummary.ownGivenStars} stars </span>)}
            </div>
        </div>

    )

}

