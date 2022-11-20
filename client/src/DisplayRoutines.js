import React, {useState} from "react";
import './App.css'
import {useHistory} from "react-router-dom";
import RoutineAvivityForm from "./RoutineActivityForm";

function DisplayRoutines({
    title, 
    category, 
    instructions,
    duration,
    id,
    user,
    setUser,
    routines
}){ 
    const [addActivityClick, setAddActivityClick] = useState(false)
    const history = useHistory();
    function handleUserRoutineClick(){
        history.push(`routines/${id}`)
    }

    function handleActivityClick(){
        setAddActivityClick(!addActivityClick)
    }
    return (
        <div className="routine-container">
        <h3 onClick={handleUserRoutineClick}>Routine: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Instructions: {instructions}</p>
        <button type="click" onClick={handleActivityClick}> create new activity </button>
            {addActivityClick ? (
                <div> 
                    <RoutineAvivityForm 
                    routineCategory={category}
                    routineId={id}
                    user={user}
                    setUser={setUser}
                    routineTitle={title}
                    routines={routines}
                    
                    />
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default DisplayRoutines