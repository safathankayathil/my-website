import React, { useState } from "react";
import profile from "../images/Property 1=Image 14.png";
import call from "../images/Property 1=phone.svg";
import video from "../images/Property 1=video-camera.svg";
import dot from "../images/White Option.svg";
import pin from "../images/attachment 2.svg";
import mic from "../images/Group 3465393.svg";
import doc from "../images/Component 96.svg";
import send from "../images/white send.svg";
import UserProfile from "../userprofile/UserProfile";
import "./chatcontent.css"


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <section className="chat">
        <section className="content">
          <section className="border">
            <div className="top" onClick={toggleSidebar}>
              <div className="left">
                <a href="#">
                  <h1>
                    <img src={profile} />
                  </h1>
                  <span>
                    <h3>Micheal</h3>
                    <h6 className="type">Typing...</h6>
                  </span>
                </a>
              </div>
              <div className="right">
                <a href="#">
                  <h1 className="dot">
                    <img src={call} />
                  </h1>
                </a>
                <a href="#">
                  <h1 className="dot">
                    <img src={video} />
                  </h1>
                </a>
                <a href="#">
                  <h1 className="dot">
                    <img src={dot} />
                  </h1>
                </a>
              </div>
            </div>
          </section>
          <section className="middle">
            <ul>
              <li class="row">
                <div class="left">
                  <span class="other">
                    <p>Hello nizar ali</p>
                    <h6>12:45</h6>
                  </span>
                 
                  
                  
                </div>
              </li>
              <li class="row">
                <div class="left">
                  <span class="other">
                    <p>Good afternoon, may ask your help to male me a real estate
                    landing page, for more details I will send as soon as you
                    approve it. thanks!</p>
                    <h6>12:45</h6>
                  </span>
                </div>
              </li>
              <li class="row r">
                <div class="right">
                  <div class="me">Hi. Micheal!</div>
                </div>
              </li>

              <li class="row r">
                <div class="right">
                  <div class="me">

                    Thank you for the offer you gave me, Yes i will accept the
                    proec from you, for the brief please send it now so you i
                    can study it first
                  </div>
                </div>
              </li>
              <li class="row">
                <div class="left">
                  <div class="other document">
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
                    <h6>12:45</h6>
                  </div>
                </div>
              </li>
              <li class="row r">
                <div class="right">
                  <div class="me">
                    Oh i see, for payment we can directly discuss now
                  </div>
                </div>
              </li>
              <li class="row r">
                <div class="right">
                  <div class="me">
                    <div className="message-list">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`message ${
                            message.sender === "user" ? "user" : "other"
                          }`}
                        >
                          <span className="text">{message.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="bottom_border">
            <section className="bottom">
              <a href="#">
                <h3>
                  <img src={pin} />
                </h3>
              </a>
              <form action="">
                <input
                  type="text"
                  placeholder="message your teddy..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
           
                <a className="button" onClick={handleSendMessage}>
                  <img src={send} />
                </a>
              </form>
              <a href="#">
                <h3>
                  <img src={mic} />
                </h3>
              </a>
            </section>
          </section>
        </section>
      </section>
      {sidebarOpen && <UserProfile />}
    </>
  );
  };

export default Chat;



