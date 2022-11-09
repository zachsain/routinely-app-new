import React, {useState} from 'react'
import './App.css'
import UserActivities from "./UserActivities"
import ActivityForm from './ActivityForm'
import RoutineForm from './RoutineForm'
import DisplayRoutines from './DisplayRoutines'

function UserProfile({user, setUser}){
    const [username, setUsername] = useState("")
    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [addActivityClick, setAddActivityClick] = useState(false)
    console.log(user.routines)

    function handleNewActivity(e){
        console.log(e) 
        setAddActivityClick(!addActivityClick)
    }

    function handleNewRoutine(e){
        console.log(user)
        setAddRoutineClick(!addRoutineClick)
    }

    console.log(user.routines)

    let userRoutines = user.routines.map(r => {
        return <DisplayRoutines
        key={r.id}
        title={r.title}
        category={r.category}
        instructions={r.instructions}
        duration={r.duration}
        activities={r.activities}
        id={r.id}
         />
    })
    

    return(
        <div>
            <div className="profile-container" >
            <h3 className='user-profile-name'>{user.username}</h3>
            <img id="user-image" style={{ width: "12%", height: "10%" }} src={user.image_url} alt="user image"/>
            <p>bio:{user.bio}</p>
            <p>contact: {user.email}</p>
            </div>

            <div className="routine-container">
                <h3>My Routines:</h3>
                {userRoutines}
            </div>
            
            {/* <button id="add-activity-button" onClick={handleNewActivity}>Add New Activity</button>
            <button id="add-new-routine" onClick={handleNewRoutine}>{addRoutineClick ? ("See Activities") : ("Add New Routine")}</button> */}

            {/* {addActivityClick ?  (<div className="routine-form"><ActivityForm user={user} setUser={setUser}/> </div> )
             : (null)} */}
            
            

            {/* <div className="user-activity-container">
                <UserActivities user={user} setUser={setUser} />
            </div> */}
        </div>

    )
}

export default UserProfile 