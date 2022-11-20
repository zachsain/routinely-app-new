import React, {useState} from "react";
import './App.css';

function UserRoutineCard({
    title,
    category,
    instructions,
    duration,
    handleRoutineSelection,
    selectRoutineClick,
    setSelectRoutineClick,
    setRoutineTitle,
    showInputForRoutine,
    setShowInputForRoutine,
    id,
    setRoutineId,
    setCategory

    }){

    function handleRoutineSelection(e){
         e.preventDefault()
         setSelectRoutineClick(!selectRoutineClick)
         setRoutineTitle(title)
         setShowInputForRoutine(true)
         setRoutineId(id)
         setCategory(category)
    }   

    function handleActivityClick(){
        
    }
  
    return(
        <div className="user-routines-card-container">
            <h4>Title: {title}</h4>
            <p>Category: {category}</p>
            <p>Duration: {duration}</p>
            <p>Instructions: {instructions}</p>
            <button type="click" value={title} onClick={handleRoutineSelection}>Select</button>
            <button type="click" onClick={handleActivityClick}> Add to New Activitiy </button>

        </div>
    )
}

export default UserRoutineCard