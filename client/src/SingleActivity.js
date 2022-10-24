import React, {useState} from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';


function SingleActivity({user}){
    

    const params = useParams();
    console.log(params.id)
    const activity = user.activities.find(a => a.id == params.id)
    console.log(activity.likes)
    let routine = user.routines.find(r => r.id == activity.routine_id)
    const [updateLikes, setUpdatedLikes] = useState(activity.likes)

    function handleAddLike(e){
        e.preventDefault()
        let addLike = updateLikes + 1
        let id = params.id
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

    return (
        <div className='single-activity-container'>
            <h4>{user.username}</h4>
            <div className='activity-container'>
            <h2>Activity: {activity.title}</h2>
            <p>Category: {activity.category}</p>
            <p>Duration: {activity.duration}</p>
            <p>Notes: {activity.description}</p>
            <p>Routine: {routine.title} </p>
            <button onClick={handleAddLike}>likes: {updateLikes}</button>
            </div>
            
            
        </div>
        
    )
}

export default SingleActivity