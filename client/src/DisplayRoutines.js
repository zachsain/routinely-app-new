import React, { useState } from "react";
import './App.css'

function DisplayRoutines({
    title, 
    category, 
    instructions,
    duration
}){


    return (
        <div className="routine-container">
        <h3>Routine: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Instructions: {instructions}</p>
        </div>
    )
}

export default DisplayRoutines