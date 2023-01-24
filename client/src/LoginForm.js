import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import DisplayErrors from './DisplayErrors'
import './App.css'


function LoginForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [showErrors, setShowErrors] = useState(false)
    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            history.push('/activities')
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => setErrors(err.errors), setShowErrors(true));
          }
        });

    }

return (
  <div>
    <form onSubmit={handleLogin}>
          <label className='signupLabel'>Username:</label>
          <input
            className='login-input'
            type='text'
            id="username"
            autoComplete="off"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input><br />
        <label className='signupLabel'>Password:</label>
          <input
            className='login-input'
            type='password'
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input><br />
          {showErrors ? (<div><DisplayErrors error={errors} /></div>) : (null)}  
          <div className="login-btn">
          <button id="login-btn" className="btn" type='submit'>Login
          </button>
          </div>
          {/* {isLoading ? (<h1>Loading...</h1>) : (null)} */}
        </form>
        </div>
 
)
  
}

export default LoginForm