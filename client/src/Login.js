import React, {useState} from 'react'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({setUser}){
    const [showLogin, setShowLogin] = useState(true)

    return (

        <div id="login-component">
        <div id="login">
        <h1 id='welcome'>Time to get take control of your routines </h1>
        {showLogin ? (
          <>
            <h2>Log in:</h2>
            <LoginForm setUser={setUser} />
            <br />
            <input type='submit' value='Sign Up' onClick={() => setShowLogin(false)} />
          </>
        ) : (
          <>
            <h1>Create a new account:</h1>
            <SignUpForm setUser={setUser} />
            <h2>If you're already signed up to be a Troll tutor, log in here!</h2>
            <input type='submit' value='Log In' onClick={() => setShowLogin(true)} />
          </>
        )}
        </div>
      </div>

    )
}

export default Login