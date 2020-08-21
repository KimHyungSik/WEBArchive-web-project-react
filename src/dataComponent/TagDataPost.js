import React from 'react';
import axios from 'axios';

class TagDataPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tagname: '' };
  }
  submit_Handle = (e) => {
    e.preventDefault();
    const { tagname } = this.state;
    const tagObject = {
      tagname,
    };

    if (tagname === '') {
      alert('빈칸이 존재 합니다');
    } else {
      axios
        .post('http://localhost:3001/table/tags', tagObject)
        .then(() => console.log('submit web link!'));
    }
    this.setState({
      tagname: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.submit_Handle}>
        <input
          type="text"
          placeholder="tagname"
          name="tagname"
          value={this.state.tagname}
          onChange={this.handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default TagDataPost;
