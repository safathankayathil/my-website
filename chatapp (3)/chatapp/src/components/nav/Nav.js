import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/chat (1).svg";
import message from "../images/chat (2).svg";
import phone from "../images/Property 1=phone.svg";
import video from "../images/Property 1=video-camera.svg";
import user from "../images/Property 1=users.svg";
import settings from "../images/Property 1=setting (1).svg";
import add from "../images/icons.svg";
import add_prof from "../images/Property 1=Image 8.png";
import "./nav.css";


export default function Nav() {  
  return (
    <>
      <section className="nav">
        <section className="top">
          <h1>
            <a href="#">
              <img src={logo} />
            </a>
          </h1>
          <ul className="middle">
          <li>
          <Link to="/coming">
              <img src={message} />
            </Link>
            </li>
            <li>
              <Link to="/coming">
                <img src={phone} />
              </Link>
            </li>
            <li>
              <Link to="/coming">
                <img src={video} />
              </Link>
            </li>
            <li>
              <Link to="/coming">
                <img src={user} />
              </Link>
            </li>
            <li>
              <Link to="/coming">
                <img src={settings} />
              </Link>
            </li>
          </ul>
          <ul className="bottom">
            <li>
              <a href="#">
                <img src={add} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={add_prof} />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

