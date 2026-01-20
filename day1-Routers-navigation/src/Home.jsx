import React from 'react'
import profimage from "./assets/profile.png";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navi=useNavigate();
  return (
   <>
    <div  className="hero">
   <div className="bio">
      <h2>I am Johnpaul !</h2>
      <h3>React developer </h3>
      
      <button className="view" onClick={()=>navi("/About")} >View me</button>
   </div>
   <div className="profile">
    <img src={profimage} alt="image" className="ima" />
   </div>
    </div>
    </>
  )
}
