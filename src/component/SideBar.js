import React from 'react';
import './SideBar';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteList: [], suchText: '', tags: [], checked: [] };
  }
  componentDidMount() {
    fetch('http://localhost:3001/table/tags')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({
          tags: json.result,
        });
      });

    fetch('http://192.168.0.16:3001/table/tagdata')
      .then(
        (result) => {
          return result.json();
        },
        (error) => {
          console.log(error);
        }
      )
      .then((json) => {
        this.setState({
          siteList: json,
        });
        this.props.putSiteList(this.state.siteList);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  suchSite = (e) => {
    var suchItems = {
      text: this.state.suchText,
      checked: this.state.checked,
    };
    this.props.suchSiteList(suchItems);
  };

  checkedChek = (e) => {
    var value = e.target.value;
    var checked = this.state.checked;

    for (var i = 0; i < checked.length; i++) {
      if (checked[i] === value) {
        checked.splice(i, 1);
        console.log(checked);
        this.setState({
          checked: checked,
        });
        this.suchSite();
        return;
      }
    }
    checked.push(value);
    console.log(checked);
    this.setState({
      checked: checked,
    });
    this.suchSite();
  };

  render() {
    var tags = this.state.tags;
    var checkBox = [];
    for (var i = 0; i < tags.length; i++) {
      checkBox.push(
        <label key={i}>
          <input
            type="checkbox"
            value={tags[i].tagname}
            onClick={this.checkedChek}
          ></input>
          {tags[i].tagname}
        </label>
      );
    }
    return (
      <nav className="mainContent SideBar">
        <div className="SideBar_itmes">
          <input
            type="text"
            name="suchText"
            value={this.state.suchText}
            onChange={this.handleChange}
            onKeyUp={this.suchSite()}
            className="suchText"
          ></input>
          {checkBox}
        </div>
      </nav>
    );
  }
}
