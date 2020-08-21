import React from 'react';
import axios from 'axios';

class TagLinkPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteid: '', tagid: '', siteList: [], tags: [] };
  }

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

    fetch('http://192.168.0.16:3001/table/tags')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({
          tags: json,
        });
      });
  }

  submit_Handle = (e) => {
    e.preventDefault();
    const { siteid, tagid } = this.state;
    const webObject = {
      siteid,
      tagid,
    };

    if (siteid === '' || tagid === '') {
      alert('빈칸이 존재 합니다');
    } else {
      axios
        .post('http://localhost:3001/table/taglinks', webObject)
        .then(() => console.log('submit web link!'));
    }
    this.setState({ siteid: '', tagid: '' });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    var sitelsit = this.state.siteList.result;
    var siteBlocks = [];
    if (sitelsit != null) {
      for (var i = 0; i < sitelsit.length; i++) {
        siteBlocks.push(
          <div key={i}>
            <h2>{sitelsit[i].sitename}</h2>
            <span>{sitelsit[i].siteid}</span>
          </div>
        );
      }
    }

    var taglist = this.state.tags.result;
    var tagBlock = [];
    if (taglist != null) {
      for (var x = 0; x < taglist.length; x++) {
        tagBlock.push(
          <div key={i}>
            <h2>{taglist[x].tagname}</h2>
            <span>{taglist[x].tagid}</span>
          </div>
        );
      }
    }
    return (
      <div>
        <form onSubmit={this.submit_Handle} className="subimtForm">
          <input
            type="text"
            name="siteid"
            value={this.state.siteid}
            onChange={this.handleChange}
            placeholder="siteid.."
          ></input>
          <input
            type="text"
            name="tagid"
            value={this.state.tagid}
            onChange={this.handleChange}
            placeholder="tagid.."
          ></input>
          <input type="submit" value="submit"></input>
        </form>
        <div>{siteBlocks}</div>
        <div>{tagBlock}</div>
      </div>
    );
  }
}

export default TagLinkPost;
