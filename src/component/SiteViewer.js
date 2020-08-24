import React from 'react';
import './SiteViewer';

export default class SiteViewer extends React.Component {
  render() {
    var sitelist = this.props.siteList.show;
    var siteBlocks = [];
    if (sitelist != null) {
      for (var i = 0; i < sitelist.length; i++) {
        siteBlocks.push(
          <div key={i} className="siteBlock">
            <div className="siteLogo">
              <img src={sitelist[i].imagelink} alt={sitelist[i].sitename}></img>
            </div>
            <a
              href={'https://' + sitelist[i].link}
              data-id={sitelist[i].sitedid}
            >
              <h2>{sitelist[i].sitename}</h2>
              <span>{sitelist[i].description}</span>
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
