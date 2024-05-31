import React, { Component } from "react";
import "./chatList.css";
import ohh from "./../../images/Property 1=Image 22.png";
import trr from "./../../images/White Option.svg";
import search from "./../../images/Music-dashboard-icons-1.svg";
import zz from "./../../images/Music-dashboard-icons.svg";
import more1 from "./../../images/Property 1=Image 1.png";
import more2 from "./../../images/Property 1=Image 10.png";
import more3 from "./../../images/Property 1=Image 11.png";
import more4 from "./../../images/Property 1=Image 12.png";
import more5 from "./../../images/Property 1=Image 13.png";
import msg1 from "./../../images/Property 1=Image 23.png";
import msg2 from "./../../images/Property 1=Image 18.png";
import msg3 from "./../../images/Property 1=Image 17.png";
import msg4 from "./../../images/Property 1=Image 22.png";
import msg5 from "./../../images/Property 1=Image 23.png";
import msg6 from "./../../images/Property 1=Image 6.png";
import dot from "./../../images/grey dots.svg";


export default class ChatList extends Component {
  render() {
    return (
      <div className="chatlist">
        <div className="top">
          <div className="left">
            <ul>
              <li>
                <img src={ohh}></img>
                <p>Bujange bapak</p>
              </li>
              <li className="ok">
                <p>My Account</p>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={trr}></img>
          </div>
        </div>
        <div className="middle">
          <div className="search">
            <img src={search}></img>
            <input placeholder="search or start new chat..." />
          </div>
          <div className="profile">
            <h4>Online now</h4>
            <span>More
             <img src={zz}></img>
            </span>
            <div className="pic">
              <ul>
                <li>
                  <img className="yes1" src={more1}></img>
                  <h6>more</h6>
                </li>
                <li>
                  <img className="yes2" src={more2}></img>
                  <h6>more</h6>
                </li>
                <li>
                  <img className="yes3" src={more3}></img>
                  <h6>more</h6>
                </li>
                <li>
                  <img className="yes4" src={more4}></img>
                  <h6>more</h6>
                </li>
                <li>
                  <img className="yes5" src={more5}></img>
                  <h6>more</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="message">
          <div className="top1">
            <h4>Message</h4>
            <p className="number">20</p>
          </div>
          <div className="middle">
            <div className="left0">
              <ul>
                <li>
                  <img className="one" src={msg1}></img>
                  <h5>Putra Pratama</h5>
                  <p>hey, how are you man ?</p>
                  <div className="right1">
                    <img className="dot" src={dot}></img>
                    <p className="time">12;45pm</p>
                  </div>
                </li>
                <li>
                  <img className="two" src={msg2}></img>
                  <h5>Michael</h5>
                  <p className="one">Typing....</p>
                  <div className="right1">
                    <img className="dot" src={dot}></img>
                    <p className="time">12:45pm</p>
                  </div>
                </li>
                <li>
                  <img className="three" src={msg3}></img>
                  <h5>Jarow</h5>
                  <p>Good morning</p>
                  <div className="right1">
                    <img className="dot" src={dot}></img>
                    <p className="time">12:45pm</p>
                  </div>
                </li>
                <li>
                  <img className="four" src={msg4}></img>
                  <h5>Kasmad</h5>
                  <p>hey, how are you man ?</p>
                  <div className="right1">
                    <img className="dot" src={dot}></img>
                    <p className="time">12:45pm</p>
                  </div>
                </li>
                <li>
                  <img className="five" src={msg5}></img>
                  <h5>Mawar</h5>
                  <p>hey, how are you man ?</p>
                  <div className="right1">
                    <img className="dot" src={dot}></img>
                    <p className="time">12:45pm</p>
                  </div>
                </li>
                <li>
                  <img className="six" src={msg6}></img>
                  <h5>Melati</h5>
                  <p>hey, how are you man ?</p>
                  <div className="right1">
                    <img className="dot" src={dot}></img>
                    <p className="time">12:45pm</p>
                  </div>
                </li>
              </ul>
              {/* <div className="right1">
                <ul>
                  <li>
                    <img src={dot}></img>
                    <p>12:45PM</p>
                  </li>
                  <li>
                    <img src={dot}></img>
                    <p>12:45PM</p>
                  </li>
                  <li>
                    <img src={dot}></img>
                     <p>12:45PM</p>
                   </li>
                  <li>
                     <img src={dot}></img>
                     <p>12:45PM</p>
                  </li>
                  <li>
                    <img src={dot}></img>
                    <p>12:45PM</p>
                  </li>
                  <li>
                    <img src={dot}></img>
                    <p>12:45PM</p>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
