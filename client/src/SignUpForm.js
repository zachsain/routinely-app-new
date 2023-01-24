import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import DisplayErrors from './DisplayErrors';
import './App.css';


function SignUpForm({setUser}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);
    const history = useHistory();
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      }).then((r) => {
        if (r.ok) {
          history.push('/activities');
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors), setShowErrors(true));
        }
      });
    }


    return (
        <div>
        <div id="signup">
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="signupLabel">Username: </label>
            <input
              className="signup-input"
              type="text"
              id="name"
              autoComplete="off"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
  
            <label className="signupLabel">Email:</label>
            <input
              className="signup-input"
              type="email"
              id="email"
              autoComplete="off"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
  
            <label className="signupLabel">Password:</label>
            <input
              className="signup-input"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            {showErrors ? (<div><DisplayErrors error={errors} /></div>) : (null)} 
            <div className="signup-btn">
            <button id="signup-btn" className="btn" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    )
    
}

export default SignUpForm