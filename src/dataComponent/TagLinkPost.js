import React from 'react';
import axios from 'axios';

class SitiDataPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { siteid: '', tagid: '' };
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
        .post('http://localhost:3001/table/sitedata', webObject)
        .then(() => console.log('submit web link!'));
    }
    this.setState({ link: '', sitename: '', description: '' });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
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
    );
  }
}

export default SitiDataPost;
