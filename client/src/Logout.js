import {useState} from 'react'
import { Redirect } from "react-router-dom";
import './App.css';

function Logout ({ user, setUser }) {

    function handleClick(e){    
        e.preventDefault()
        
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }
   

      return(
        <div id="logout-component">
          <button  id="logout-btn"  onClick={handleClick}>Logout</button>
        </div>
      )
}

export default Logout;