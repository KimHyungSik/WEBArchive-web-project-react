import React from 'react';
import './SideBar';

export default class SideBar extends React.Component {
  state = { siteList: [] };

  componentDidMount() {
    fetch('http://192.168.0.16:3001/sitedata')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({
          siteList: json,
        });
      });
  }

  getSiteList() {
    fetch('http://192.168.0.16:3001/sitedata')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({
          siteList: json,
        });
      });
  }

  render() {
    return (
      <nav className="mainContent SideBar">
        <input
          type="button"
          value="getList"
          onClick={(e) => {
            this.getSiteList();
            this.props.onClick(this.state.siteList);
          }}
        ></input>
        <input
          type="button"
          value="deleteList"
          onClick={(e) => {
            this.props.onClickDelete(this.state.siteList);
          }}
        ></input>
      </nav>
    );
  }
}
