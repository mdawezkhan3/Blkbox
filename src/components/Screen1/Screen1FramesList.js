import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Typography } from '@material-ui/core';

const Screen1FramesList = ({ screen1Frames, handleVideoSelection }) => {

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', marginBottom: '50px'}}>
      {screen1Frames.map(frame => {
        return (
          <div key={frame.name} style={{position: 'relative', color: 'green', padding: '10px'}}>
            <video 
              width="320" 
              height="250" 
              onClick={() => handleVideoSelection(frame)}
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
  )
};

export default Screen1FramesList;