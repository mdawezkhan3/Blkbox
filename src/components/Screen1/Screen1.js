import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Screen1Details from "./Screen1Details";



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


  return (
    <div style={{margin: '40px'}}>
      <Screen1Details selectedFrameCount={selectedFrameCount} />
      <div style={{display: 'flex', flexWrap: 'wrap', marginBottom: '50px'}}>
        {screen1Frames.map(frame => {
          return (
            <div key={frame.name} style={{position: 'relative', color: 'green', padding: '10px'}}>
              <video 
                width="320" 
                height="250" 
                onClick={() => {
                  if(!frame.selected) {
                    setSelectedFrameCount(selectedFrameCount + 1);
                    frame.selected = true;
                  } else if(frame.selected) {
                    setSelectedFrameCount(selectedFrameCount - 1);
                    frame.selected = false;
                  }
                }}
              >
                <source src={frame.url} type="video/mp4"/>
              </video>
              <div style={{
                position: 'absolute',
                left: '70px',
                bottom: '13px', 
                width: '200px',
                height: '42px',
                backgroundColor: '#0cab0c', 
                color: 'white', 
                display: frame.selected ? 'flex' : 'none',
                alignItems: 'center', 
                justifyContent: 'flex-start'
              }}>
                <CheckCircleOutlineIcon style={{paddingLeft: '12px'}} />
                <Typography style={{paddingLeft: '5px'}} >Selected</Typography>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <Button onClick={() => history.push("/screen2")} style={{backgroundColor: 'blue', color: 'white', textTransform: 'none'}}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Screen1;
