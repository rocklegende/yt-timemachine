import React from 'react';
import '../styles/App.scss';
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import VideoWatchView from "./VideoWatchView";
import Startpage from "./Startpage";

function NotFound() {
    return <div>Not found</div>;
}

function App() {
  return (
      <div className="App">
        <Header/>
        <main>
            <Routes>
                // If nothing else matches then render NotFound
                <Route path='*' element={<NotFound />} />
                <Route path={"/"} element={<Startpage />} />
                <Route path={"/video/:videoId"} element={<VideoWatchView />}/>
            </Routes>
        </main>
      </div>
  );
}

export default App;
