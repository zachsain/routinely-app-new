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
    routine,
    date
}){

    const [isClicked, setIsClicked] = useState(false)
    const history = useHistory();


    function handleClick(){
        history.push(`/activities/${id}`)
    }
    return( 
        <div className="activity-container">
            <div>
            <h3>Activity: {title}</h3>
            <p>Category: {category}</p> 
            <p>Duration: {duration}</p>
            <p>Notes: {description}</p>
            <h5 id="activity-date">{date}</h5>
            </div>
        </div>

        
    )
}

export default ShowRoutineActivities