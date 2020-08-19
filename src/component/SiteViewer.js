import React from 'react';
import './SiteViewer';

export default class SiteViewer extends React.Component {
  render() {
    var sitelsit = this.props.siteList.result;
    var siteBlocks = [];
    if (sitelsit != null) {
      for (var i = 0; i < sitelsit.length; i++) {
        siteBlocks.push(
          <div key={i} className="siteBlock">
            <div className="siteLogo"></div>
            <a
              href={'https://' + sitelsit[i].link}
              data-id={sitelsit[i].sitedid}
            >
              <h2>{sitelsit[i].sitename}</h2>
              <span>{sitelsit[i].description}</span>
            </a>
          </div>
        );
      }
    }
    return (
      <section key="section" className="mainContent">
        {siteBlocks}
      </section>
    );
  }
}
