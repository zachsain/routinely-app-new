import React, {useState} from 'react'
import './App.css'
import UserActivities from "./UserActivities"
import ActivityForm from './ActivityForm'

function UserProfile({user, setUser}){
    const [username, setUsername] = useState("")
    console.log(user.routines)

    function handleNewActivity(e){
        console.log(e) 
        // need to add link that changes url 
        // takes user to add new activity add activity form 
    }

    function handleNewRoutine(e){
        console.log(e)
    }
    

    return(
        <div>
            <div className="profile-container" >
            <h3 className='user-profile-name'>{user.username}</h3>
            <img id="user-image" style={{ width: "12%", height: "10%" }} src={user.image_url} alt="user image"/>
            <p>bio:{user.bio}</p>
            <p>contact: {user.email}</p>
            </div>
            
            <button id="add-activity-button" onClick={handleNewActivity}>Add New Activity</button>
            <button id="add-new-routine" onCLick={handleNewRoutine}>Add New Routine</button>
            

            <div className="user-activity-container">
                <UserActivities user={user} setUser={setUser} />
            </div>
        </div>

    )
}

export default UserProfile 