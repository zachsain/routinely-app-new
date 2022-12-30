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
// import Logo from '../public/andriod-chrome-192x192'
import Loading from './Loading'
// import SingleActivityEdit from './SingleActivityEdit';


function App() {

  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  } , []);

  
  if (!user) return (
    <div style={{
        display:'flex',
        flexFlow: 'row wrap',
        textAlign: 'center',
        justifyContent:'space-around',
        minHeight: '100vh',
        backgroundSize: 'cover', 
        backgroundImage: 'url("https://img.freepik.com/free-vector/man-sport-activities_102902-2338.jpg?w=1380&t=st=1669233240~exp=1669233840~hmac=cfdb7370806c6f4ad4d721be5fde757ae95722cdf3a27ae557b22a058bd69418")', 
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
          <Routines user={user} setUser={setUser} />
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
          <SingleRoutine />
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;





