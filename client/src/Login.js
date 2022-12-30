import React, {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './App.css';


function Login({setUser}){
    const [showLogin, setShowLogin] = useState(true)

    return (

        <div>
        <h1 id='welcome'>Welcome To Your New Activity Journal </h1>
        <div className="login-form">
        {showLogin ? (
          <div>
            <h2>Login:</h2>
            <LoginForm setUser={setUser} />
            <br />
            {/* <input type='submit' value='Sign Up' onClick={() => setShowLogin(false)} /> */}
            <div className="signup-btn">
            <button id="signup-btn" className='btn' onClick={() => setShowLogin(false)}>Signup</button>
            </div>
          </div>
        ) : (
          <div>
            <h2>Create a new account:</h2>
            <SignUpForm setUser={setUser} />
            <h3>If you're already signed up log in here:</h3>
            {/* <input type='submit' value='Log In' onClick={() => setShowLogin(true)} /> */}
            <div className="signup-btn">
            <button id="signup-btn" className='btn' onClick={() => setShowLogin(true)}>Login</button>
            </div>
          </div>
        )}
        </div>
      </div>

    )
}

export default Login