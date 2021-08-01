import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import FramesList from "./FramesList";
import Screen2Details from "./Screen2Details";

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


  
  const VideoPlayer = () => {

    if(screen2.length > 0) {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
              <ReactPlayer
                  url={screen2[currentPlayingIndex].url}
                  onEnded={() => {
                    if(currentPlayingIndex === screen2.length - 1) {
                      setCurrentPlayingIndex(0)
                    } else {
                      setCurrentPlayingIndex(currentPlayingIndex + 1)
                    }
                  }}
                  playing
                  onProgress ={(play) => {
                    console.log(play);
                  }}
                  controls
                  muted
              />
            </div>
      )
    } else {
      return null;
    }
  }


  return (
    <div style={{margin: '50px'}}>
      <Screen2Details />
      <VideoPlayer/>
      <FramesList screen2={screen2} />
    </div>
  );
};

export default Screen2;
