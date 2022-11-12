import React, {useState} from 'react'


function LoginForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleLogin(e) {
      
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });

    }

return (
    <form onSubmit={handleLogin}>
          <label className='signupLabel'>username</label>
          <input
            className='input'
            type='text'
            id="username"
            autoComplete="off"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input><br />
        <label className='signupLabel'>password</label>
          <input
            className='input'
            type='password'
            id="password"
            placeholder="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input><br />
          <button type='submit'>Login
            {/* {isLoading ? "Loading..." : "Let's go!"} */}
          </button>
        </form>
 
)
  
}

export default LoginForm