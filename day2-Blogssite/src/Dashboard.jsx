import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./DashBoard.css";
import Nav from "./Nav";
function Dashboard() {
  return (
   <>
          <Nav/>

    <div className="dashboard">
      <div className="sidebar">
        <Link to="/">Profile</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="contact">Contact</Link>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div></>
  );
}

export default Dashboard;
