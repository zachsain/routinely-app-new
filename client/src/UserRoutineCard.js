import React, {useState} from "react";
import ActivityForm from "./ActivityForm"
import './App.css';
import { HiOutlinePlus } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";

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
            <div className="select-routine-btn-container">
            <button className="btn" id="routine-select-btn" type="click" value={title} onClick={handleRoutineSelection}> <FiPlus size="1.6em" className="routine-select-icon"/> </button>
            </div>
        </div>
    )
}

export default UserRoutineCard