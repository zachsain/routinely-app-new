import React, {useState} from "react";
import ActivityForm from "./ActivityForm"
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

    const [addActivityClick, setAddActivityClick] = useState(false)

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
            <button className="btn" type="click" value={title} onClick={handleRoutineSelection}>Select</button>
            

        </div>
    )
}

export default UserRoutineCard