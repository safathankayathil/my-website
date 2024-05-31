import React, { Component } from "react";
import Avatar from "./Avatar";
import time from "./../images/grey dots.svg";


export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
  }
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "http://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <h3>{this.props.name}</h3>
          <p>{this.props.para}</p>
          <h5>{this.props.time}</h5>
          
    

          <span className="activeTime">
            <img src={time}/>
            </span>
        </div>
      </div>
    );
  }
}