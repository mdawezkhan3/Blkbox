import React, { useState, useEffect } from "react";
import Screen2FramesList from "./Screen2FramesList";
import Screen2Details from "./Screen2Details";
import VideoPlayer from "./VideoPlayer";

const Screen2 = () => {

  const [screen2, setScreen2] = useState([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(0);

  useEffect(() => {
    async function fetchMyAPI() {
      let screen2Response = await fetch('http://devserver.blkbox.ai/api/studio/creatives/step3');
      screen2Response = await screen2Response.json();
      setScreen2(screen2Response.data);
    }
    fetchMyAPI();
  }, [])


  return (
    <div style={{margin: '50px'}}>
      <Screen2Details />
      <VideoPlayer 
        screen2={screen2} 
        currentPlayingIndex={currentPlayingIndex} 
        handleVideoChange={(playingIndex) => setCurrentPlayingIndex(playingIndex)} 
      />
      <Screen2FramesList screen2={screen2} />
    </div>
  );
};

export default Screen2;
