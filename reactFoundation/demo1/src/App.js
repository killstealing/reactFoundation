import React, { Component } from 'react';
import PCIndex from './components/pc_index';
import './App.css';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import PCNewsDetails from './components/pc_news_details';
import PCNewscontainer from './components/pc_newscontainer';
import MobileDetails from './components/mobile_details';


class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <Router history={browserHistory}>
            <Route path="/" component={PCIndex}>
              <IndexRoute component={PCNewscontainer}></IndexRoute>
              <Route path="details/:uniquekey" component={PCNewsDetails}></Route>
            </Route>
          </Router>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <Router history={browserHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileDetails}></Route>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
