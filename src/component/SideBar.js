import React from 'react';
import './SideBar';
import GetSiteList from '../dataComponent/GetSiteList';

export default class SideBar extends React.Component {
  state = { siteList: [], suchText: '' };

  componentDidMount() {
    fetch('http://192.168.0.16:3001/table/linkdata')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          siteList: json,
        });
        this.props.putSiteList(this.state.siteList);
      });
  }

  getSiteSuch = (e) => {
    e.preventDefault();
    this.props.onClick(this.state.suchText);
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
              onKeyUP={this.props.onClick(this.state.suchText)}
              className="suchText"
            ></input>
            <input
              type="submit"
              name="suchButton"
              value="검색"
              className="suchButton"
            ></input>
          </form>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>
      </nav>
    );
  }
}
