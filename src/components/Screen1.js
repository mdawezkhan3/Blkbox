import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


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

const Screen1 = props => {
  const [screen1, setScreen1] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchMyAPI() {
      let screen1Response = await fetch('http://devserver.blkbox.ai/api/studio/creatives/step2');
      screen1Response = await screen1Response.json();
      setScreen1(screen1Response.data);
    }
    fetchMyAPI();
  }, [])

  if(screen1.length) {
    console.log("API for Screen 1:", screen1);
  }

  return (
    <div style={{margin: '40px'}}>
      <div style={{margin: '60px'}} >
        <Typography style={{fontWeight: 'bold', fontSize: '40px'}} >
          App Name
        </Typography>
        <br/>
        <div style={{display: 'flex', justifyContent: 'space-between'}} >
          <Typography style={{fontSize: '16px'}} >
            Select a video frame
          </Typography>
          <Typography style={{fontWeight: 'bold', fontSize: '16px', color: 'blue'}} >
            1 selected out of 84 frames
          </Typography>
        </div>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {screen1.map(item => {
          return (
            <div key={item.name} style={{padding: '10px'}}>
              <video width="320" height="250">
                <source src={item.url} type="video/mp4"/>
              </video>
            </div>
          )
        })}
      </div>
      <br/>
      <br/>
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <Button style={{backgroundColor: 'blue', color: 'white', textTransform: 'none'}} onClick={() => history.push("/screen2")}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Screen1;
