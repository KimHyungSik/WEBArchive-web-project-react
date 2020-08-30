import React from 'react';
import './css/App.css';
import SiteDataPost from './dataComponent/SiteDataPost';
import TagDataPost from './dataComponent/TagDataPost';
import GetSiteList from './dataComponent/GetSiteList';
import SetSiteList from './dataComponent/SetSiteList';
import TagLinkPost from './dataComponent/TagLinkPost';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <div className="title">WEBA</div>
          </header>
          <div className="bodys">
            <Switch>
              <Route exact path="/">
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
              <Route path="/uploadtaglink">
                <TagLinkPost />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
