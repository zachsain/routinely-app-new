import React, {useState} from 'react'
import './App.css'

function ActivitiesCard({
    title,
    category, 
    duration, 
    description,
    likes,
    routine_id,
    user
}){
    let routine = user.routines.find(r => r.id == routine_id)

    return(
        console.log(routine),
  
        <div className="activity-container">
        <h3>Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <p>Routine: {routine.title} </p>
        <button>likes: {likes}</button>


        </div>
    )
}

export default ActivitiesCard