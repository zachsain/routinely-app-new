import React from 'react'
import { Link } from "react-router-dom"

function NavBar ({user, setUser}) {
 return (
    <div className="navbar-container">
    <div className="nav-btn">
      <Link to="/">Home</Link>
    </div>
    <div className="nav-btn">
      <Link to="/activities">Activities</Link>
    </div>
    <div className="nav-btn">
      <Link to="/discover">discover</Link>
    </div>
    <div className="nav-btn">
      <Link to="/logout">Logout</Link>
    </div>
  </div>
 )
}

export default NavBar