import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
  return (
    <div>
        <div className="nav">
         <div className="title">
            <h2>MY Blogs</h2>
         </div>
         <div className="na">
          <Link to="/dash">Dashboard</Link>
         </div>
        </div>

    </div>
  )
}

export default Nav