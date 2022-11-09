import React, { useState, useCallback} from "react";
import './App.css'
import {useHistory} from "react-router-dom";

function DisplayRoutines({
    title, 
    category, 
    instructions,
    duration
}){

    function handleRoutineClick(e){
        console.log(e)
    }

    const history = useHistory();
    const handleUserRoutineClick = useCallback(() => history.push('/routines/:id'));

    return (
        <div className="routine-container" onClick={handleRoutineClick}>
        <h3>Routine: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Instructions: {instructions}</p>
        </div>
    )
}

export default DisplayRoutines