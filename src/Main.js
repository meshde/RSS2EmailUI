import React, { Component } from 'react';
import Tags from './Tags';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
    }
    this.handle = this.handle.bind(this);
  }

  handle() {
    var val = document.getElementById('url').value;
    var tags = this.getTags(val);
    this.setState(
      {
        list: tags,
      }
    );
  }

  getTags(val) {
    return [val, val, val];
  }

  render() {
    return (
      <div className="Main">
        <input type="text" id="url" />
        <button id="submit" onClick={this.handle}>
          Submit
        </button>
        <Tags list={this.state.list} />
        <textarea id="txt" ></textarea>
      </div>
    );
  }
}

export default Main;
