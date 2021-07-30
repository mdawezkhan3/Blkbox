import React from "react";
import { Typography } from '@material-ui/core';

const Screen1Details = ({ selectedFrameCount }) => {

  return (
    <div style={{margin: '0px 97px 35px 70px'}} >
      <Typography style={{fontWeight: 'bold', fontSize: '40px', paddingBottom: '15px'}} >
        App Name
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-between'}} >
        <Typography style={{fontSize: '16px'}} >
          Select a video frame
        </Typography>
        <Typography style={{fontWeight: 'bold', fontSize: '16px', color: 'blue'}} >
          {selectedFrameCount} selected out of 84 frames
        </Typography>
      </div>
    </div>
  );
};

export default Screen1Details;
