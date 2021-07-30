import React from "react";
import { Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import DeleteIcon from '@material-ui/icons/Delete';

const FramesList = ({ screen2 }) => {

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}} >
    <div style={{backgroundColor: '#20211f', width: '100px', display: 'flex', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
      <Typography style={{fontSize: '14px', color: '#c2c4be'}} >Total Time</Typography>
      <Typography  style={{color: '#c2c4be', fontWeight: 530}}>00:00:00</Typography>
    </div>
    <div style={{
      backgroundColor: '#0065ff',
      width: '35px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-around', 
      alignItems: 'center'
    }}>
      <AddCircleOutlineIcon style={{fontSize: '15px', color: 'white'}} />
      <SyncAltIcon style={{fontSize: '15px', color: 'white'}} />
      <SkipPreviousIcon style={{fontSize: '15px', color: 'white'}} />
      <SkipNextIcon style={{fontSize: '15px', color: 'white'}} />
      <DeleteIcon style={{fontSize: '15px', color: 'white'}} />
    </div>
    <div style={{display: 'flex'}}>
      {screen2.map(item => {
        return (
          <div key={item.name} style={{padding: '10px'}}>
            <video width="190" height="120">
              <source src={item.url} type="video/mp4"/>
            </video>
          </div>
        )}
      )}
    </div>
  </div>
  );
};

export default FramesList;
