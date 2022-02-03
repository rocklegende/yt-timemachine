import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {Item, RatingSummary, VideoStatistics, YoutubeDataProvider} from "./youtubeDataProvider";
import {AxiosResponse} from "axios";
import YouTube, {YouTubeProps, Options, PlayerVars} from "react-youtube";
import moment from "moment";

function App() {

  const defaultLocale = "en-US"
  const dataProvider = new YoutubeDataProvider();
  const [relatedVideos, setRelatedVideos] = useState<Item[]>([]);
  const [moreVideosFromChannel, setMoreVideosFromChannel] = useState<Item[]>([]);
  const [currentVideoId, setCurrentVideoId] = useState<string>("31Om4VrSzb8");
  const [currentVideoItem, setCurrentVideoItem] = useState<any>(null);

  const playerBla: PlayerVars = {
    autoplay: 1,
    modestbranding: 1
  }

  const opts = {
    playerVars: playerBla
  };

  const [playerOptions, setPlayerOptions] = useState<Options>(opts);
  const [videoStatistics, setVideoStatistics] = useState<VideoStatistics>({videoLength: 0, numViews: 0, ratingSummary: { avgRating: 0, numTotalRatings: 0}});

  useEffect(() => {
    const getMoreInformationAboutVideoFromUrl = async () => {
      let res = await dataProvider.getMoreInfoAboutVideos([currentVideoId]);
      if (res.length === 0) {
        return;
      }
      let videoItem = res[0];
      setCurrentVideoItem(videoItem);

      let _relatedVideos: Item[] = await dataProvider.getVideosRelatedToVideo(currentVideoId);
      console.log({_relatedVideos});
      setRelatedVideos(_relatedVideos);


      let _moreVideosFromChannel: Item[] = await dataProvider.getVideosFromChannel(videoItem.snippet?.channelId!);
      console.log({_moreVideosFromChannel});
      setMoreVideosFromChannel(_moreVideosFromChannel);
    }

    const durationSeconds = processDuration("PT1M14S");
    console.log(durationSeconds);

    getMoreInformationAboutVideoFromUrl();
  }, [currentVideoId])

  const processDuration = (ytDurationString: string): string => {
    const duration = moment.duration(ytDurationString);

    let strin = moment
        .utc(moment.duration(ytDurationString).asMilliseconds())
        .format('hh:mm:ss')
        .padStart(4, '0:0')


    if (Math.floor(duration.asHours()) === 0 && strin.length > 0) {
      strin = strin.substring(3)
    }

    return strin
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={"logo-and-label-container"}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>u2ube timemachine</h2>
        </div>
        <input />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {currentVideoItem !== null && (<main>
        <div className={"primary-tab"} >
          <YouTube className={"videoplayer"} videoId={currentVideoId} opts={playerOptions}/>
          <div className={"tab-element video-statistics"}>
            <div className={"rating"}>
              <span><strong>Rate:</strong> </span>
              <div id="full-stars-example-two">
                <div className="rating-group">
                  {/*<input disabled checked className="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />*/}
                  <label aria-label="1 star" className="rating__label" htmlFor="rating3-1"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
                  <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
                  <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
                  <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
                  <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
                </div>
              </div>
              <span>{videoStatistics.ratingSummary.numTotalRatings.toLocaleString(defaultLocale)} ratings</span>
            </div>
            <span>Views: {videoStatistics.numViews.toLocaleString(defaultLocale)}</span>
          </div>
        </div>
        <div className={"secondary-tab"}>

          <div className={"creator-info-box"} >
            <div className={"creator-info-box-header"}>
              {/*<img src={videos[0].snippet.thumbnails.medium.url}/>*/}
              <div className={"creator-info-box-description"}>
                <span>From: <a href={"https://www.google.com"}>{currentVideoItem.snippet.channelTitle}</a></span>
                <br/>
                <span>Joined: 1 year ago</span>
                <br/>
                <span>Videos: 8</span>
              </div>
              <button>Subscribe</button>
            </div>
          </div>

          <h2>More From: {currentVideoItem.snippet.channelTitle}</h2>
          <div className={"video-list"} >
            {moreVideosFromChannel.map((video: Item) => (
                <div className={"video-list-item"}>
                  <img
                      className="video-list-item-picture"
                      src={video.snippet?.thumbnails!.default.url}
                      //@ts-ignore
                      onClick={() => setCurrentVideoId(video.id)}
                  />

                  <div className={"video-list-item-description"}>
                    <a href={"https://www.google.com"}>{video.snippet?.title!}</a>
                    <br></br>
                    <span>{processDuration(video.contentDetails?.duration!)}<strong>From:</strong> <a href={"https://www.google.com"}>{video.snippet?.channelTitle}</a> </span>
                    <br></br>
                    <span><strong>Views:</strong> {video.statistics?.viewCount!}</span>
                  </div>
                </div>
            ))}
          </div>

          <h2>Related videos</h2>
          <div className={"video-list"} >
            {relatedVideos.map((video: any) => (
                <div className={"video-list-item"}>
                  <img
                      className="video-list-item-picture"
                      src={video.snippet?.thumbnails!.default.url}
                      onClick={() => setCurrentVideoId(video.id)}
                  />

                  <div className={"video-list-item-description"}>
                    <a href={"https://www.google.com"}>{video.snippet?.title!}</a>
                    <br></br>
                    <span>{processDuration(video.contentDetails?.duration!)}<strong>From:</strong> <a href={"https://www.google.com"}>{video.snippet?.channelTitle}</a> </span>
                    <br></br>
                    <span><strong>Views:</strong> {video.statistics?.viewCount!}</span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </main>)}
    </div>
  );
}

export default App;
