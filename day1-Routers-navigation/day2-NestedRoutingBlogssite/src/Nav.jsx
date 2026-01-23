import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="title">
        <h2>BLOGS</h2>
      </div>

      <div className="na">
         <NavLink className={({ isActive }) => (isActive ? "act" : "")} to="/home">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "act" : "")} to="/dash">
          Dashboard
        </NavLink>
         <NavLink cclassName={({ isActive }) => (isActive ? "act" : "")} to="/" >
          Logout
        </NavLink>

      </div>
    </div>
  );
}

export default Nav;
