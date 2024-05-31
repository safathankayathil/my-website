import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/chat (1).svg";
import logo2 from "./../../images/chat (2).svg";
import call from "./../../images/Property 1=phone.svg";
import video from "./../../images/Property 1=video-camera.svg";
import contect from "./../../images/Property 1=users.svg";
import setting from "./../../images/Property 1=setting (1).svg";
import plus from "./../../images/icons.svg";
import cool from "./../../images/Property 1=Image 8.png";


        export default class Nav extends Component {
        render() {
            return (
            <div className="nav">
                <div className="nav__blocks1">
                    <div className="ok">
                    <img src={logo}></img>
                    </div>
                </div>
            <div className="nav__blocks2">
                    <div className="ok2">
                        <img src={logo2}></img>
                    </div>
            </div>
                <div className="middle">
                 <ul>
                    <li>
                        <img src={call}></img>
                    </li>
                    <li>
                        <img src={video}></img>
                    </li>
                    <li>
                        <img src={contect}></img>
                    </li>
                    <li>
                        <img src={setting}></img>
                    </li>
                 </ul>
                </div>
                <div className="bottam">
                    <ul>
                        <li>
                            <img src={plus}></img>
                        </li>
                        <li>
                            <img src={cool}></img>
                        </li>
                    </ul>
                </div>
            </div> 
            );
        } 
    }
             
