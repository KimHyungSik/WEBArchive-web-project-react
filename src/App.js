import React from 'react';
import './css/App.css';
import SiteDataPost from './dataComponent/SiteDataPost';
import GetSiteList from './dataComponent/GetSiteList';
import SetSiteList from './dataComponent/SetSiteList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <SetSiteList />
              <GetSiteList />
            </Route>
            <Route path="/uploadSite">
              <SiteDataPost />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
