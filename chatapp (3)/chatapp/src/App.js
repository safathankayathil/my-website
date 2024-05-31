import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Coming from "./components/nav/Coming";
import ChatBody from "./components/ChatBody";
import "./App.css";



export default function App() {
  return (
    <>
      <section className="app">
        <section className="wrapper">
          <Router>
            <Routes>
              <Route path="/" element={<ChatBody/>} /> 
              <Route path="coming" element={<Coming/>} />
            </Routes>
          </Router>
        </section>
      </section>
    </>
  );
}



















