import React, {useState} from 'react'
import './App.css'
import ActivityForm from './ActivityForm'
import RoutineForm from './RoutineForm'
import DisplayRoutines from './DisplayRoutines'
import { useHistory} from 'react-router-dom'

function UserProfile({user, setUser}){
    const [username, setUsername] = useState("")
    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [addActivityClick, setAddActivityClick] = useState(false)
    const [showButtons, setShowButtons] = useState(false)
    const history = useHistory();

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

    // if (user.routines === []){
    //   return setShowButtons(false)
    // }


    function handleAddActivity(e){
        history.push('/activities')
    }

    function handleAddRoutine(e){
        history.push('/routines')
    }
    return(
        <div>
            <div className="profile-container" >
            <h3 className='user-profile-name'>Name: {user.username}</h3>
           { user.image_url ?
           ( <img 
                id="user-image" 
                style={{ width: "12%", height: "10%" }} 
                src={user.image_url} 
                alt="user image"
            />) : (
                <img 
                id="user-image" 
                style={{ width: "12%", height: "10%" }} 
                src="https://static.vecteezy.com/system/resources/thumbnails/002/266/169/small/strength-training-icon-workout-gym-fitness-line-vector.jpg" 
                alt="user image"
                />
             )}
            {/* <p>bio: {user.bio}</p>
            <p>contact: {user.email}</p> */}
            </div>

           {/* {  user.routines === [] ? (<div className="routine-container">
                <h3>My Routines:</h3>
                {userRoutines}
            </div>) : (
                <div>
                <h3>Welcome to your user profile!</h3>
                <button onClick={handleAddActivity}>Create A New Activity</button>
                <button onClick={handleAddRoutine}> Create A Routine</button>
                </div>
            )} */}

            {   user.routines.length > 0 ? (
                  <div className="routine-container">
                  <h3>My Routines:</h3>
                  {userRoutines}
                  </div>   
            ) : (
                <div>
                <h3>Welcome to your user profile!</h3>
                <button onClick={handleAddActivity}>Create A New Activity</button>
                <button onClick={handleAddRoutine}> Create A Routine</button>
                </div>
            )}

            
        </div>

    )
}

export default UserProfile 