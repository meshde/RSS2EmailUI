import React, { Component } from 'react';
import Tags from './Tags';
import './Main.css';
import axios from 'axios';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      list: {RSSHEADER: [], RSSITEMS: []}
    }
    this.url = "http://172.16.164.59:80/";
    this.handle = this.handle.bind(this);
    this.getTags = this.getTags.bind(this);
    this.resolve = this.resolve.bind(this);
  }

  handle() {
    var val = document.getElementById('url').value;
    this.getTags(val);
  }

  resolve() {
    var txt = document.getElementById('txt').value;
    axios.post(this.url+"rss/resolve", {
      url: document.getElementById('url').value,
      html: txt
    })
      .then(function(response){
        document.getElementById('output').innerHTML = response.data;
        document.getElementById('myModal').style.display = "block";
      })
  }

  close(event) {
    if (event.target === document.getElementById('myModal') ||
      event.target === document.getElementsByClassName('close')[0]
    ){
      document.getElementById('myModal').style.display = "none";
    }
  }


  getTags(val) {
    var ret;
    var url = this.url+"rss/extract";
    // console.log(url);
    axios.post(url, {
      url: val
    })
      .then(function(response){
      console.log(response);
      ret = response.data.rss_tags;

      this.setState(
        {
          list: ret,
        }
      );
    
    }.bind(this)).catch(function(error){
      console.log(error);
    });
    ret = {'rss': [1,2,3], 'item': [4,5,6]};
    return ret;
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
        <button className="inp" id="resolve" onClick={this.resolve}>
          Resolve
        </button>
        <div id="myModal" class="modal" onClick={this.close}>
          <div class="modal-content">
            <span class="close" onClick={this.close}>&times;</span>
            <div id="output">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
