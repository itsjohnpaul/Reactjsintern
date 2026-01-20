import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css";
function Nav() {
  
  return (
    <div>
       <div className="navc">
        <div className="ti">
            <h2>JOHNPAUL</h2>
        </div>
         <div className="nav">
            <NavLink to="/" className={({isActive})=>(isActive?"act":"")}>Home</NavLink>
            <NavLink to="About" className={({isActive})=>(isActive?"act":"")}>About</NavLink>
            <NavLink to="Contact" className={({isActive})=>(isActive?"act":"")}>Contact</NavLink>
        </div>
       </div>


    </div>
  )
}

export default Nav