import React, {useEffect, useState} from "react";
import {useData} from "./DataContextProvider";
import {showErrorMessage} from "../helpers/helper";
import VideoRecommendationSection from "./VideoRecommendationSection";
import moment from "moment";

function Startpage() {
    const [videoCategories, setVideoCategories] = useState([]);
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;
    const [currentDate, setCurrentDate] = useState<moment.Moment>(dataProvider.getCurrentDate());
    const [year, setYear] = useState<number>(dataProvider.year);

    const changeYear = (newYear: number) => {
        setYear(newYear);
        dataProvider.changeYear(newYear);
    }

    const fetchAndSetVideoCategories = async () => {
        const {data, error} = await dataProvider.getCategories();
        if (error) {
            showErrorMessage("Error loading categories of US");
        }
        setVideoCategories(data);
    }

    useEffect(() => {
        fetchAndSetVideoCategories();
    }, [])

    useEffect(() => {
        const listener = dataProvider.addChangeListener(newYear => setCurrentDate(dataProvider.getCurrentDate()))

        return () => {
            dataProvider.removeChangeListener(listener);
        }
    }, [])

    return (
        <div className={"startpage"}>
            <div className={"youtube-year-selector-container"}>
                <label
                    htmlFor={"youtube-year-selector"}
                    className={"youtube-year-selector-label"}
                >
                    Welcome to {currentDate.format('MMMM Do')}
                </label>
                <select
                    name="youtube-year-selector"
                    id="youtube-year-selector"
                    value={`${year}`}
                    className={"youtube-year-selector"}
                    onChange={(e) => changeYear(parseInt(e.target.value))}
                >
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                </select>
            </div>
            <VideoRecommendationSection
                categoryId={"latest"}
                title={"New this week"}
                firstElementAsHero={true}
            />
            {videoCategories.slice(0, 6).map((category: any, index) => (
                <VideoRecommendationSection
                    key={index}
                    categoryId={category.id}
                    title={category.snippet.title}
                />
            ))}
        </div>
    );
}

export default Startpage;