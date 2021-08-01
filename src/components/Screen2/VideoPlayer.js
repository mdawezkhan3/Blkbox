import React from "react";
import ReactPlayer from 'react-player';

  const VideoPlayer = ({ screen2, currentPlayingIndex, handleVideoChange }) => {

    if(screen2.length > 0) {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
              <ReactPlayer
                  url={screen2[currentPlayingIndex].url}
                  onEnded={() => {
                    if(currentPlayingIndex === screen2.length - 1) {
                      handleVideoChange(0)
                    } else {
                      handleVideoChange(currentPlayingIndex + 1)
                    }
                  }}
                  playing
                  controls
                  muted
              />
            </div>
      )
    } else {
      return null;
    }
  }

export default VideoPlayer;