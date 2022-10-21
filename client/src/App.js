import './App.css';
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from './Login';
import Home from './Home';
import Activities from './Activities';
import Discover from './Discover';
import Logout from './Logout';


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  if (!user) return (
    <div style={{
        minHeight: '100vh',
        backgroundSize: 'cover', 
        backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', 
        padding: "100px"}}>
      <Login setUser={setUser} />
    </div>)


  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
        <Route exact path='/activities'>
          <Activities user={user} setUser={setUser}/>
        </Route>
        <Route exact path='/discover'>
          <Discover user={user} setUser={setUser} />
        </Route>
        <Route exact path='/logout'>    
          <Logout user={user} setUser={setUser} />
        </Route>
      </Switch>
    
        
  
    
    </div>
    
    //   <Router>
    //  <NavBar user={user} setUser={setUser} />


      //  </Router>  

  );
}

export default App;





// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route path="/testing">
//             <h1>Test Route</h1>
//           </Route>
//           <Route path="/">
//             <h1>Page Count: {count}</h1>
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;