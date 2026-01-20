import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from './Home';
import Contact from "./Contact";
import Nav from './Nav';

function App() {
  return (
    <div>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>  
      </Routes>

    </div>
  )
}

export default App