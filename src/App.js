import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: '', title: '', description: '' };
  }

  submit_Handle = (e) => {
    const { link, title, description } = this.state;
    const webObjcet = {
      link,
      title,
      description,
    };
    axios
      .post('http://localhost:3001/getter', webObjcet)
      .then(() => console.log('submit web link!'));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
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
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="title.."
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
      </div>
    );
  }
}

export default App;
