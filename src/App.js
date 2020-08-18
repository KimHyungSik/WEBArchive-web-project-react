import React from 'react';
import './css/App.css';
import SiteDataPost from './dataComponent/SiteDataPost';
import TagDataPost from './dataComponent/TagDataPost';
import GetSiteList from './dataComponent/GetSiteList';
import SetSiteList from './dataComponent/SetSiteList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="title">안녕하세용</div>
          <Switch>
            <Route exact path="/">
              <div className="titleImg"></div>
              <div className="mainContents">
                <SetSiteList />
                <GetSiteList />
              </div>
            </Route>
            <Route path="/uploadSite">
              <SiteDataPost />
            </Route>
            <Route path="/uploadtag">
              <TagDataPost />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
