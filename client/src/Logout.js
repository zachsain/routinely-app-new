import {useState} from 'react'
import { Redirect } from "react-router-dom";

function Logout ({ user, setUser }) {

    function handleSubmit(e){    
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
        <h1 id='logout'>Logout</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className='input' 
                    type='submit'
                    id="logout"
                    value={"Confrim logout"}
                ></input><br />
            </form>
      </div>
       )
}

export default Logout;