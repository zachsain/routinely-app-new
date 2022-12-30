import React, {useState} from 'react';
import './App.css';


function SignUpForm({setUser}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    const [bio, setBio] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(imageUrl);
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
          image_url: imageUrl,
          bio
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => (setErrors(err.errors), console.log(err.errors)));
        }
      });
    }
  
    return (
        <>
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
  
            <label className="signupLabel">Profile photo:</label>
            <input
              className="signup-input"
              type="text"
              id="profile-picture"
              autoComplete="off"
              placeholder="image_url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
            <br />

            <label className="signupLabel">Bio</label>
            <input
                className="signup-input"
                type="text"
                id="user-bio"
                autoComplete="off"
                placeholder="tell us about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            ></input>
            <br />
            <div className="signup-btn">
            <button id="signup-btn" className="btn" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </>
    )
    
}

export default SignUpForm