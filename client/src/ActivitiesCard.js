import React, {useState, useCallback} from 'react'
import './App.css'
import { useHistory} from 'react-router-dom'


function ActivitiesCard({
    id,
    title,
    category, 
    duration, 
    description,
    likes,
    routine_id,
    user
}){
    const [updateLikes, setUpdatedLikes] = useState(likes)
    const [isClicked, setIsClicked] = useState(false)

    // const [formData, setFormData] = useState()

    function handleAddLike(e){
        e.preventDefault()
        let addLike = updateLikes + 1
        let id = e.target.id
        fetch(`/activities/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ likes: addLike})
        })
            .then(r => r.json())
            .then(activity => setUpdatedLikes(activity.likes))

    }

    function handleDeleteActivity(e){
        console.log(e.target.id)
    }

    let routine = user.routines.find(r => r.id == routine_id)


    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(`/activities/${id}`));

    return(
        
        <div className="activity-container">
        <h3 onClick={handleOnClick} >Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <p>Routine: {routine.title} </p>
        <button id={id} onClick={handleAddLike}>likes: {updateLikes}</button>
        <button handleClick={handleDeleteActivity} className='delete-activity-button'>x</button>
        </div>
        
    )
}

export default ActivitiesCard