import React, { useState, useEffect } from "react";
import { Button, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { makeStyles } from "@material-ui/core/styles";
import { CollectionsBookmarkRounded } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "center"
  }
}));

const Screen2 = props => {

  const [screen2, setScreen2] = useState([]);
  const [loadedVideosCount, setLoadedVideosCount] = useState(0);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(2);




  useEffect(() => {
    async function fetchMyAPI() {
      let screen2Response = await fetch('http://devserver.blkbox.ai/api/studio/creatives/step3');
      screen2Response = await screen2Response.json();
      setScreen2(screen2Response.data);
    }
    fetchMyAPI();
  }, [])


  const handleVideoChange = () => {
    setTimeout(() => {
      console.log("hey")
    },100);
    if(currentPlayingIndex === screen2.length - 1) {
      setCurrentPlayingIndex(0)
    } else {
      setCurrentPlayingIndex(currentPlayingIndex + 1)
    }
  }

  console.log("hello");
  
  const MainVideo = () => {

    if(screen2.length > 0) {
      console.log("hello");
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
              <ReactPlayer
                  url={screen2[currentPlayingIndex].url}
                  onEnded={() => handleVideoChange()}
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

  return (
    <div style={{margin: '50px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}} >
        <Typography style={{fontWeight: 'bold', fontSize: '30px'}} >
          App Name
        </Typography>
        <Button style={{backgroundColor: 'blue', color: 'white', textTransform: 'none'}}>
          Save Video
        </Button>
      </div>

      <MainVideo/>

      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {screen2.map(item => {
        return (
          <div key={item.name} style={{padding: '10px'}}>
            <video width="200" height="120">
              <source src={item.url} type="video/mp4"/>
            </video>
            
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Screen2;
