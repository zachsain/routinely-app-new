import React, {useState} from 'react'
import './App.css'
import SingleActivity from './SingleActivity'
import { Link } from 'react-router-dom'


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

    let routine = user.routines.find(r => r.id == routine_id)

    function handleActivityPage(e){
        console.log(e)
        // <Link to=`/ac`

            
        
    }

    return(
  
        <div onClick={handleActivityPage} className="activity-container">
        <h3>Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <p>Routine: {routine.title} </p>
        <button id={id} onClick={handleAddLike}>likes: {updateLikes}</button>


        </div>
    )
}

export default ActivitiesCard