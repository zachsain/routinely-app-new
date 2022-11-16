import React from "react";
import './App.css'
import {useHistory} from "react-router-dom";

function DisplayRoutines({
    title, 
    category, 
    instructions,
    duration,
    id
}){
    const history = useHistory();
    function handleUserRoutineClick(){
        history.push(`routines/${id}`)
    }
    return (
        <div className="routine-container" onClick={handleUserRoutineClick}>
        <h3>Routine: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Instructions: {instructions}</p>
        </div>
    )
}

export default DisplayRoutines