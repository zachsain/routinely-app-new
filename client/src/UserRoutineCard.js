import React, {useState} from "react";
import './App.css';

function UserRoutineCard({title, category, instructions, duration, user, setUser}){
    console.log(title)

    function handleRoutineSelect(e){
        e.preventDefault()
        console.log(e)
    }
    return(
        <div className="user-routines-card-container">
            <h4>Title: {title}</h4>
            <p>Category: {category}</p>
            <p>Duration: {duration}</p>
            <p>Instructions: {instructions}</p>
            <button onClick={handleRoutineSelect}>Select</button>

        </div>
    )
}

export default UserRoutineCard