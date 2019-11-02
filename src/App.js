import React, { Component } from 'react';
import { Route, BrowserRouter, Switch }  from 'react-router-dom';

import classes from './App.module.css';
import VideoWatchPage from './VideoWatchPage';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (    
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/watch/:videoId" component={VideoWatchPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
