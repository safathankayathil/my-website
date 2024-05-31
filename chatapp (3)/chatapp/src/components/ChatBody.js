import React from "react";
import Nav from "./nav/Nav";
import ChatList from "./chatlist/ChatList";
import ChatContent from "./chatcontent/ChatContent";

export default function ChatBody() {
  return (
    <>
        <Nav/>
        <ChatList />
        <ChatContent />
    </>
  );

  }