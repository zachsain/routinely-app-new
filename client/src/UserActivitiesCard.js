import React, {useState, useCallback} from "react";
import { useHistory} from 'react-router-dom';

function UserActivitiesCard({
    id,
    title,
    category, 
    duration, 
    description,
    user,
    routine_id
}){
    const [isClicked, setIsClicked] = useState(false)

    // const [formData, setFormData] = useState()


    function handleDeleteActivity(e){
        console.log(e.target.id)
    }



    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(`/activities/${id}`));

    let routine = user.routines.filter(r => r.id === routine_id)

    console.log(routine)

    return(
        
        <div className="activity-container">
        <h3 onClick={handleOnClick}>Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <p>Routine Used: {routine.title} </p> 
        <button onClick={handleDeleteActivity} className='delete-activity-button'>x</button>
        </div>
        
    )

}

export default UserActivitiesCard