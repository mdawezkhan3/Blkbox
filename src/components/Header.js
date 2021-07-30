import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Tabs, Tab, AppBar, Toolbar } from "@material-ui/core";

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

const Header = () => {
  const classes = useStyles();
  const history = useHistory();


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => history.push("/")} >
            <div style={{border: "1px solid white", padding: '5px', marginRight: '8px'}}>
              BLK
            </div>
            <div>
              Blkbox
            </div>
          </div>
          <div className={classes.headerOptions}>
            <Tabs value={0} >
              <Tab label="Home"  />
              <Tab label="Videos"  />
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
