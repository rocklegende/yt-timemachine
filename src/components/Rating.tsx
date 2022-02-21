import React, {FC, useEffect} from "react";
import {useAuth} from "./AuthContextProvider";
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
    const valueChanged = (stars: number) => {
        onRatingChanged(stars);
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
                        <div className={`rating-group ${!ratable ? "disabled" : ""}`}>
                            {[1,2,3,4,5].map(numStars => (<>
                                <label
                                    key={`rating3-label-${numStars}`}
                                    aria-label={`${numStars} star`}
                                    className="rating__label"
                                    htmlFor={`rating3-${numStars}`}
                                >
                                    <RatingIcon/>
                                </label>
                                <input
                                    readOnly
                                    className={`rating__input ${!ratable ? "disabled" : ""}`}
                                    name="rating3"
                                    id={`rating3-${numStars}`}
                                    value={numStars}
                                    type="radio"
                                    disabled={!ratable}
                                    checked={value === numStars}
                                    onClick={() => valueChanged(numStars)}
                                />
                            </>))}
                        </div>
                    </div>

                    {ratingSummary?.numTotalRatings ? (
                        <span>{`${ratingSummary.numTotalRatings.toLocaleString("en-US")} ratings`} &#183; {ratingSummary.avgStars.toFixed(2)} avg</span>
                    ) : (
                        <span>{"no ratings yet"}</span>
                    )}


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

