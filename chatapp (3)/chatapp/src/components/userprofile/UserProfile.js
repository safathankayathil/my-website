import React from "react";
import close from "../images/Vector.svg";
import pic from "../images/Property 1=Image 1.png";
import image from "../images/image_processing20220305-7813-19y4c1j.jpg";
import image2 from "../images/image_processing20220225-29217-hv4dvv.jpg";
import doc from "../images/Component 96.svg";
import "./userprofile.css"

export default function UserProfile() {
  return (
    <>
      <section className="details">
        <section className="content">
          <section className="border">
            <div className="top">
              <h2>Contact details</h2>
              <h1 className="close">
                <a href="/">
                  <img src={close} />
                </a>
              </h1>
            </div>
          </section>
          <div className="profile">
            <div className="image">
              <img src={pic} />
            </div>
            <h2>Micheal</h2>
            <h6 className="type">Online...</h6>
          </div>
          <div className="a">
            <div className="media">
              <div className="pic">
                <h2>Media</h2>
                <h6>14 picture</h6>
              </div>
              <a href="#">View all</a>
            </div>
            <div className="pictures">
              <div className="image">
                <a href="#">
                  <img src={image} />
                </a>
              </div>
              <div className="image">
                <a href="#">
                  <img src={image2} />
                </a>
              </div>
              <div className="image">
                <a href="#">
                  <img src={image} />
                </a>
              </div>
              <div className="background">
                <a href="#">
                  <h1>+11</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="b">
            <div className="file">
              <div>
                <h2>Files</h2>
                <h6 className="grey">12 Files</h6>
              </div>
              <a href="#">View all</a>
            </div>
            <div className="docs">
              <div className="doc">
                <div className="top">
                  <h6>
                    <img src={doc} />
                  </h6>
                  <h4>Brief Project Real Es...</h4>
                </div>
                <div className="bottom">
                  <h6>DOCS</h6>
                  <p>32KB</p>
                </div>
              </div>
              <div className="time">12:45PM</div>
             
            </div>
          </div>
      </section>
      </section>
    </>
  );
}

