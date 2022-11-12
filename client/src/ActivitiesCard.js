import React, {useState, useCallback} from 'react'
import './App.css'
import { useHistory} from 'react-router-dom'


function ActivitiesCard({
    user,
    setUser,
    id,
    title,
    category, 
    duration, 
    description,
}){

    const [isClicked, setIsClicked] = useState(false)

    // const history = useHistory();
    // const handleOnClick = useCallback(() => history.push(`/activities/${id}`));

    return(
        
        <div className="activity-container">
        <h3 >Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        {/* <p>Routine: {routine.title} </p> */}
        {/* <button handleClick={handleDeleteActivity} className='delete-activity-button'>x</button> */}
        </div>
        
    )
}

export default ActivitiesCard