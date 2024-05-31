import React, { Component } from "react";
import bujange from "../images/Property 1=Image 22.png";
import option from "../images/White Option.svg";
import search from "../images/Music-dashboard-icons-1.svg";
import more from "../images/Music-dashboard-icons.svg";
import one from "../images/Property 1=Image 1.png";
import two from "../images/Property 1=Image 10.png";
import three from "../images/Property 1=Image 11.png";
import four from "../images/Property 1=Image 12.png";
import five from "../images/Property 1=Image 16.png";
import "./chatlist.css";
import ChatListItems from "./ChatListItems";




export default class ChatList extends Component {
  allChatUsers = [
    {
      image: require("./../images/Profile (3).jpg"),
      id: 1,
      name: " Putra Pratama ",
      para:"hey,how are you man?",
      active: true,
      isOnline: true,
      time:"02:45"
    },
    {
      image:require("./../images/Profile (15).jpg"),
      id: 2,
      name: "Michael",
      para:"Typing....",
      active: true,
      isOnline: true,
      time:"05:45"
    },
    {
      image:require("./../images/Profile (11).jpg") ,
      id: 3,
      name: "Jarrow",
      para:"Good Morning",
      active: false,
      isOnline: false,
      time:"12:44"
    },
    {
      image:require("./../images/Profile (12).jpg"),
      id: 4,
      name: "Kasmad",
      para:"hey,how are you?",
      active: false,
      isOnline: true,
      time:"2:45"
    },
    {
      image:require("./../images/Profile (13).jpg")
       ,
      id: 5,
      name: "Elsa Black",
      para:"hey,how are you?",
      active: false,
      isOnline: false,
      time:"01:45"
    },
    {
      image:require("./../images/Profile (14).jpg")
        ,
      id: 6,
      name: "Kayley Mellor",
      para:"Good Morning",
      active: false,
      isOnline: true,
      time:"12:05"
    },
    {
      image:require("./../images/Profile (15).jpg"),
      id: 7,
      name: "Hasan Mcculloch",
      para:"hey,how are you?",
      active: false,
      isOnline: true,
      time:"12:45",
    },
    {
      image:require("./../images/Profile (2).jpg"),
      id: 8,
      name: "Autumn Mckee",
      para:"Good Morning",
      active: false,
      isOnline: false,
      time:"1:45"
    },
    {
      image:require("./../images/Profile (3).jpg"),
      id: 9,
      name: "Allen Woodley",
      para:"hey,how are you?",
      active: false,
      isOnline: true,
      time:"10:45"
    },
    {
      image:require("./../images/Profile (7).jpg"),
      id: 10,
      name: "Manpreet David",
      para:"hey,how are you?",
      active: false,
      isOnline: true,
      time:"11:05"
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers
    };
  }
  render() {
    return (
      <section className="chats">
         <section className="account">
           <div className="top">
             <h1 className="me">
               <img src={bujange} />
             </h1>
             <span>
               <h2>Bujange bapak</h2>
               <h6>My Account</h6>
             </span>
             <h1 className="options">
               <a href="#">
                 <img src={option} />
               </a>
             </h1>
           </div>
         </section>
         <div className="search">
           <form action="">
             <span>
               <img src={search} />
            </span>
           <input
              type="text"
              placeholder="Search or start new chat..."
              name="search"
            />
          </form>
        </div>

        <div className="online">
          <h2>Online now</h2>
          <span>
            <a href="#">
              <span>More</span>
              <img src={more} />
            </a>
          </span>
        </div>
        <ul className="profile">
          <li className="one">
            <a href="#">
              <img src={one} />
              <span className="isOnline active"></span>
             
            </a>
            
          </li>
          <li className="two">
            <a href="#">
              <img src={two} />
            </a>
            <span className="isOnline"></span>
          </li>
          <li className="three">
            <a href="#">
              <img src={three} />
            </a>
            <span className="isOnline active"></span>
          </li>
          <li className="four">
            <a href="#">
              <img src={four} />
            </a>
            <span className="isOnline active"></span>
          </li>
          <li className="five">
            <a href="#">
              <img src={five} />
            </a>
            <span className="isOnline active"></span>
          </li>
        </ul>
        <ul className="more">
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
        <div className="online">
          <h2>Messages</h2>
          <h6 className="new">20</h6>
          </div>
      
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                para={item.para}
                time={item.time}
              />
            );
          })}
        </div>
        </section>
 
    );
  }
}