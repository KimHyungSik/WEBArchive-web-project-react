import React from 'react';
import axios from 'axios';

class SitiDataPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      sitename: '',
      description: '',
      imagelink: false,
    };
  }

  submit_Handle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('imagelink', this.state.imagelink);
    data.append('link', this.state.link);
    data.append('sitename', this.state.sitename);
    data.append('description', this.state.description);

    if (
      this.statelink === '' ||
      this.statesitename === '' ||
      this.statedescription === ''
    ) {
      alert('빈칸이 존재 합니다');
    } else {
      axios
        .post('http://localhost:3001/table/sitedata/sitedata', data)
        .then(() => console.log('submit web link!'));
    }
    this.setState({ link: '', sitename: '', description: '' });
    console.log(data);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFileInput = (e) => {
    this.setState({
      imagelink: e.target.files[0],
    });
  };

  render() {
    return (
      <form
        onSubmit={this.submit_Handle}
        className="subimtForm"
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="imagelink"
          onChange={this.handleFileInput}
        ></input>
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
