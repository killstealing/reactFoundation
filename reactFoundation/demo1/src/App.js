import React, { Component } from 'react';
import PCIndex from './components/pc_index';
import './App.css';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';
import { BrowserRouter as Router, Route, Link, hashHistory } from 'react-router-dom';
import PCNewsDetails from './components/pc_news_details';
class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <Router>
            <div>
              <Route path="/" component={PCIndex}></Route>
              <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            </div>
          </Router>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <Router>
            <MobileIndex />
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
