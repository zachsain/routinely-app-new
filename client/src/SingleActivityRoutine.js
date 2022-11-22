import React from "react";
import { useHistory} from 'react-router-dom'
import './App.css';

function SingleActivityRoutine({
    title, 
    category, 
    instructions,
    duration,
    id
}){
    const history = useHistory()

    function handleRoutineClick(e){
        history.push(`/routines/${id}`)
    }

    return (
        <div onClick={handleRoutineClick} className="routine-container">
        <h3>Routine: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Instructions: {instructions}</p>
        </div>
    )

}

export default SingleActivityRoutine