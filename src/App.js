import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import './App.css';


const App = () => {

  return (
    <>
      <Header />
        <Switch>
          <Route exact from="/" render={props => <Screen1 {...props} />} />
          <Route exact path="/screen2" render={props => <Screen2 {...props} />} />
      </Switch>
    </>
  );
}

export default App;