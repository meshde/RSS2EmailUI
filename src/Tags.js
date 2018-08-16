import React, { Component } from 'react';

class Tags extends Component {
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
      <ul className="list">
        {
          this.props.list.map(
            (item) => 
            <li className="item" onClick={
              () => { 
                this.handle(item) 
              }
            } >
              { item }
            </li>
          )
        }
      </ul>
    );
  }
}

export default Tags;
