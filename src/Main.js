import React, { Component } from 'react';
import Tags from './Tags';
import './Main.css';

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
        <div className="Main-url" >
          <input type="text" className="inp" id="url" />
          <button className="inp" id="submit" onClick={this.handle}>
            Submit
          </button>
        </div>
        <div className="edit" >
          <Tags list={this.state.list} />
          <textarea className="inp" id="txt" rows="20"></textarea>
        </div>
      </div>
    );
  }
}

export default Main;
