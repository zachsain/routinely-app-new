import React, {useState} from 'react'
import { Link } from "react-router-dom"
import './App.css'

function NavBar ({user, setUser}) {
 return (
  <div className="navbar-container">
    {/* <div>
    <Link to="/"><img id="routinely-logo" src="./images/routinely-logo.png" alt="img"/></Link>
    </div> */}
    <div className='nav-btn'>
    <Link to="/">My Routines</Link>
    </div>
    <div className="nav-btn">
    <Link  to="/activities">Activities</Link>
    </div>
    <div className="nav-btn">
    <Link to="/routines">Routines</Link>
    </div>
    <div className="nav-btn">
    <Link to="/logout">Logout</Link>
    </div>
   
  </div> 
    
 )
}

export default NavBar


{/* <div className="navbar-container">
<div >
<Link to="/"><img id="routinely-logo" src="./images/routinely-logo.png" alt="img"/></Link>
</div>
<div className="nav-btn">
<Link  to="/activities">Activities</Link>
</div>
<div className="nav-btn">
<Link to="/routines">Routines</Link>
</div>
<div className="nav-btn">
<Link to="/logout">Logout</Link>
</div>
</div> */}