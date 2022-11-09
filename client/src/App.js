import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from './Login';
import AllActivities from './AllActivities';
import Routines from './Routines';
import Logout from './Logout';
import UserProfile from './UserProfile';
import SingleActivity from './SingleActivity';
import SingleRoutine from './SingleRoutine'

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
    <div className="app-container">
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/activities'>
          <AllActivities user={user} setUser={setUser}/>
        </Route>
        <Route exact path='/routines'>
          <Routines />
        </Route>
        <Route exact path='/logout'>    
          <Logout user={user} setUser={setUser} />
        </Route>
        <Route exact path="/">
          <UserProfile user={user} setUser={setUser} />
        </Route>
        <Route exact path="/activities/:id">
          <SingleActivity user={user} />
        </Route>
        <Route exact path="/routines/:id">
          <SingleRoutine user={user} />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;





