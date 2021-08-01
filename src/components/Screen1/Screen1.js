import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Screen1Details from "./Screen1Details";
import Screen1FramesList from "./Screen1FramesList";


const Screen1 = () => {
  const [screen1Frames, setScreen1Frames] = useState([]);
  const [selectedFrameCount, setSelectedFrameCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    async function fetchMyAPI() {
      let screen1FramesResponse = await fetch('http://devserver.blkbox.ai/api/studio/creatives/step2');
      screen1FramesResponse = await screen1FramesResponse.json();
      setScreen1Frames(screen1FramesResponse.data);
    }
    fetchMyAPI();
  }, [])


  const handleVideoSelection = (frame) => {
    if(!frame.selected) {
      setSelectedFrameCount(selectedFrameCount + 1);
      frame.selected = true;
    } else {
      setSelectedFrameCount(selectedFrameCount - 1);
      frame.selected = false;
    }
  }

  console.log("frames ->>>", screen1Frames);

  return (
    <div style={{margin: '40px'}}>
      <Screen1Details selectedFrameCount={selectedFrameCount} />
      <Screen1FramesList screen1Frames={screen1Frames} handleVideoSelection={handleVideoSelection} />
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <Button onClick={() => history.push("/screen2")} style={{backgroundColor: 'blue', color: 'white', textTransform: 'none'}}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Screen1;
