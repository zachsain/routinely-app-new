import React, {useState} from "react";
import './App.css';

function UserRoutineCard({
    title,
    category,
    instructions,
    duration,
    handleRoutineSelection,
    user, 
    setUser,
    selectRoutineClick,
    setSelectRoutineClick,
    setRoutineTitle,
    showInputForRoutine,
    setShowInputForRoutine,
    id,
    setRoutineId,

    }){

    function handleRoutineSelection(e){
         e.preventDefault()
         setSelectRoutineClick(!selectRoutineClick)
         setRoutineTitle(title)
         setShowInputForRoutine(!showInputForRoutine)
         setRoutineId(id)
    }   
        
    // const [routineValues, setRoutineValues] = useState({
    //     title, category, instructions, duration
    // })
    return(
        <div className="user-routines-card-container">
            <h4>Title: {title}</h4>
            <p>Category: {category}</p>
            <p>Duration: {duration}</p>
            <p>Instructions: {instructions}</p>
            <button type="click" value={title} onClick={handleRoutineSelection}>Select</button>

        </div>
    )
}

export default UserRoutineCard