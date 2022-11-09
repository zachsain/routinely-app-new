import React, {useState, useEffect} from 'react'
import RoutineForm from './RoutineForm'
import './App.css'
import DisplayRoutines from './DisplayRoutines'

function Routines({user, setUser}){
    const [routines, setRoutines] = useState([])
    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [showUserRoutinesClick, setShowUserRoutinesClick] = useState(false) 

    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => (setRoutines(allRoutines), console.log(allRoutines)))
     
    }, [])

    function handleNewRoutine(e){
        console.log(user)
        setAddRoutineClick(!addRoutineClick)
    }


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
            <h1>Routines:</h1>
            {addRoutineClick ? 
            (<div className="routine-form"><RoutineForm setRoutines={setRoutines}/> </div> )
             : (<div className="user-activity-container">
               {displayRoutines} 
            </div>)}

            {/* {displayRoutines} */}
        </div>
    

    )
   
}

export default Routines