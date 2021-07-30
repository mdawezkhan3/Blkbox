import React from "react";
import { Button, Typography } from '@material-ui/core';

const Screen2Details = ({  }) => {

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}} >
      <Typography style={{fontWeight: 'bold', fontSize: '30px'}} >
        App Name
      </Typography>
      <Button style={{backgroundColor: 'blue', color: 'white', textTransform: 'none'}}>
        Save Video
      </Button>
    </div>
  );
};

export default Screen2Details;
