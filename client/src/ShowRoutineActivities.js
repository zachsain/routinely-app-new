import React, {useState, useCallback} from 'react'
import DisplayRoutines from './DisplayRoutines'
import './App.css'
import { useHistory} from 'react-router-dom'


function ShowRoutineActivities({
    user,
    setUser,
    id,
    title,
    category, 
    duration, 
    description,
    routine
}){

    const [isClicked, setIsClicked] = useState(false)
    const history = useHistory();


    function handleClick(){
        history.push(`/activities/${id}`)
    }
    return(
        
        <div onClick={handleClick} className="activity-container">
        <p> Associated Activities:</p>
        <h3 >Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        </div>
        
    )
}

export default ShowRoutineActivities