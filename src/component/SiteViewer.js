import React from 'react';

export default class SiteViewer extends React.Component {
  render() {
    var sitelsit = this.props.siteList.result;
    var siteBlocks = [];
    if (sitelsit != null) {
      for (var i = 0; i < sitelsit.length; i++) {
        siteBlocks.push(
          <div key={i} className="siteBlock">
            <a
              href={'https://' + sitelsit[i].link}
              data-id={sitelsit[i].sitedid}
            >
              <p>
                <h2>{sitelsit[i].sitename}</h2>
              </p>
              <span>{sitelsit[i].description}</span>
            </a>
          </div>
        );
      }
    }
    return <div>{siteBlocks}</div>;
  }
}
