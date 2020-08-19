import React from 'react';
import './SideBar';

export default class SideBar extends React.Component {
  state = { siteList: [] };

  componentDidMount() {
    fetch('http://192.168.0.16:3001/table/sitedata')
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

  render() {
    return (
      <nav className="mainContent SideBar">
        <div className="SideBar_itmes">
          <form className="such_column">
            <input type="text" name="suchText" className="suchText"></input>
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
