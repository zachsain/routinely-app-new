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
        <br />
        {/* <h1 id='logout'>Logout</h1> */}
        <button  id="logout-btn"  onClick={handleClick}>Logout</button>
            {/* <form onSubmit={handleSubmit}>
                <input 
                    className='input' 
                    type='submit'
                    id="logout"
                    value={"Confrim logout"}
                ></input><br />
            </form> */}
      </div>
       )
}

export default Logout;