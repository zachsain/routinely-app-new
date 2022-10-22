import React from 'react'
import { Link } from "react-router-dom"

function NavBar ({user, setUser}) {

    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "5px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

 return (
    <div className="navbar-container">
    <div className="nav-btn">
      <Link to="/" style={linkStyles}>Home</Link>
    </div>
    <div className="nav-btn">
      <Link  to="/activities" style={linkStyles}>Activities</Link>
    </div>
    <div className="nav-btn">
      <Link to="/discover" style={linkStyles}>Discover</Link>
    </div>
    <div className="nav-btn">
      <Link to="/logout" style={linkStyles}>Logout</Link>
    </div>
  </div>
 )
}

export default NavBar