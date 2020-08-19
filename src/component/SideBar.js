import React from 'react';
import './SideBar';
import GetSiteList from '../dataComponent/GetSiteList';

export default class SideBar extends React.Component {
  state = { siteList: [], suchText: '' };

  getSiteList() {
    fetch('http://192.168.0.16:3001/table/sitedata')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          siteList: json,
        });
        this.props.onClick(this.state.siteList);
      });
  }

  getSiteSuch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/table/linkdata?tagname=${this.state.suchText}`)
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          siteList: json,
        });
        this.props.onClick(this.state.siteList);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <nav className="mainContent SideBar">
        <div className="SideBar_itmes">
          <form className="such_column" onSubmit={this.getSiteSuch}>
            <input
              type="text"
              name="suchText"
              value={this.state.suchText}
              onChange={this.handleChange}
              className="suchText"
            ></input>
            <input
              type="submit"
              name="suchButton"
              value="검색"
              className="suchButton"
            ></input>
          </form>
          <input
            className="Button"
            type="button"
            value="getList"
            onClick={(e) => {
              this.getSiteList();
            }}
          ></input>
          <input
            className="Button"
            type="button"
            value="deleteList"
            onClick={(e) => {
              this.props.onClickDelete(this.state.siteList);
            }}
          ></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>
      </nav>
    );
  }
}
