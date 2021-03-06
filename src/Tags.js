import React, { Component } from 'react';
import './Tags.css';

class Tags extends Component {
  constructor(){
    super();
    this.handle = this.handle.bind(this);
    this.addToText = this.addToText.bind(this);
    this.handleItems = this.handleItems.bind(this);
  }

  addToText(item) {
    var txt = document.getElementById('txt');
    var start = txt.selectionStart;
    var end = txt.selectionEnd;
    txt.value = txt.value.substring(0, start) + 
      item + 
      txt.value.substring(end, txt.value.length);
  }

  handle(item) {
    this.addToText("{{" + item + "}}\n\n");
  }

  handleItems() {
    var itemTags = this.props.list["RSSITEMS"];
    var textToAdd = "";
    textToAdd += "{{RSSITEMS}}\n";
    textToAdd += "<div>";
    textToAdd += "<a href='{{RSSITEM:link}}'>";
    textToAdd += "<h3>{{RSSITEM:title}}</h3></a>";
    textToAdd += "<i syle='font-style:italic'>{{RSSITEM:pubDate}}</i>";
    textToAdd += "<p>{{RSSITEM:description}}</p>";
    textToAdd += "{{/RSSITEMS}}\n\n";
    this.addToText(textToAdd);
  }

  render() {
    return(
      <div className="list inp">
        <ul className="outer">
          {
            this.props.list["RSSHEADER"].map(
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
          {this.props.list["RSSHEADER"].includes("RSS:item") && 
              <li className="item" onClick={
                () => {
                  this.handleItems();
                }
              } >
                RSSITEMS
                <ul className="outer inner" >
                  {
                    this.props.list["RSSITEMS"].map(
                      (item) =>
                      <li className="item">
                        { item }
                      </li>
                    )
                  }
                </ul>
              </li>
          }
        </ul>
      </div>
    );
  }
}

export default Tags;
