import React, {useState, useEffect, useCallback} from 'react'
import RoutineForm from './RoutineForm'
import './App.css'
import DisplayRoutines from './DisplayRoutines'
import { useHistory} from 'react-router-dom'

function Routines({user, setUser}){
    const [routines, setRoutines] = useState([])
    const [addRoutineClick, setAddRoutineClick] = useState(false)

    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => setRoutines(allRoutines))
     
    }, [])

    function handleNewRoutine(){
        setAddRoutineClick(!addRoutineClick)
    }

  
    const history = useHistory();
    const handleUserRoutineClick = useCallback(() => history.push('/'));


    let displayRoutines = routines.map(r => {
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
           <button id="add-new-routine" onClick={handleNewRoutine}>{addRoutineClick ? ("Show Routines") : ("Add New Routine")}</button>
           <button id="my-routines-button" onClick={handleUserRoutineClick}>My Routines</button>
            <h1>Routines:</h1>
            {addRoutineClick ? 
            (<div className="routine-form"><RoutineForm setRoutines={setRoutines}/> </div> )
             : (<div className="user-activity-container">
               {displayRoutines} 
            </div>)}
        </div>
    

    )
   
}

export default Routines