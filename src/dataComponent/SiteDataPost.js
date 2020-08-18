import React from 'react';
import axios from 'axios';

class SitiDataPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: '', sitename: '', description: '' };
  }

  submit_Handle = (e) => {
    e.preventDefault();
    const { link, sitename, description } = this.state;
    const webObject = {
      link,
      sitename,
      description,
    };

    if (link === '' || sitename === '' || description === '') {
      alert('빈칸이 존재 합니다');
    } else {
      axios
        .post('http://localhost:3001/sitedata', webObject)
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
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
          placeholder="link.."
        ></input>
        <input
          type="text"
          name="sitename"
          value={this.state.sitename}
          onChange={this.handleChange}
          placeholder="sitename.."
        ></input>
        <textarea
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="description"
        ></textarea>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default SitiDataPost;
