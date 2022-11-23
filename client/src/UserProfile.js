import React, {useState} from 'react'
import './App.css'
import ActivityForm from './ActivityForm'
import RoutineForm from './RoutineForm'
import DisplayRoutines from './DisplayRoutines'
import { useHistory} from 'react-router-dom'
import GoalForm from './GoalForm'
import './App.css';

function UserProfile({user, setUser}){
    const [username, setUsername] = useState("")
    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [addActivityClick, setAddActivityClick] = useState(false)
    const [showButtons, setShowButtons] = useState(false)
    const [goalFormClick, setGoalFormClick] = useState(false)
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

    function handleGoalClick(){
        setGoalFormClick(!goalFormClick)
    }
    return(
        <div className='profile-page'>
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
             
            </div>

            {/* <div className="goal-form">
                <button onClick={handleGoalClick}>Create New Goal</button>
                {goalFormClick ? 
                    (<GoalForm
                        user={user}
                        setUser={setUser}
                    />) 
                    : 
                    (null)}
               
             </div> */}
          

            {   user.routines.length > 0 ? (
                  <div>
                  <h3>My Routines:</h3>
                  {userRoutines}
                  </div>   
            ) : (
                <div>
                <h3>Welcome to your user Routinely profile!</h3>
                <p>Here you can create and manage your activities and routines</p>
                <p>You can also create weekly goals for each category you want to do every week</p>
                <p>Start by creating a new activity</p>

                <button className="btn" onClick={handleAddActivity}>Create A New Activity</button>
                <button className="btn" onClick={handleAddRoutine}> Create A Routine</button>
                </div>
            )}

            
        </div>

    )
}

export default UserProfile 