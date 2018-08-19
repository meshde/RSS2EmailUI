import React, { Component } from 'react';
import './Tags.css';

class Tags extends Component {
  constructor(){
    super();
    this.handle = this.handle.bind(this);
  }
  handle(item) {
    var txt = document.getElementById('txt');
    var start = txt.selectionStart;
    var end = txt.selectionEnd;

    txt.value = txt.value.substring(0, start) + 
      item + "\n\n" + 
      txt.value.substring(end, txt.value.length);
  }
    
  render() {
    return(
      <div className="list inp">
        <ul>
          {
            this.props.list.map(
              (item) =>
              <li className="item" onClick={
                () => {
                  this.handle(item);
                }
              } >
                { item }
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Tags;
