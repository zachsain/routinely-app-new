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
            {   user.routines.length > 0 ? (
                  <div>
                  <h3 className="user-page-header">My Routines:</h3>
                  {userRoutines}
                  </div>   
            ) : (
                <div className="user-blank-container">
                <div className="add-new-activty-btn">
                <button id="activity-btn" className="btn" onClick={handleAddActivity}>Create Activity</button>
                </div>
                </div>
            )}

            
        </div>

    )
}

export default UserProfile 