import React, {useState} from 'react'

function ActivitiesCard({
    title,
    category, 
    duration, 
    description,
    likes,
    routine_id,
    user
}){
    let routine = user.routines.filter(r=> r.id == routine_id)

    return(
        <div>
        <h2>title: {title}</h2>
        <p>category: {category}</p>
        <p>duration: {duration}</p>
        <p>notes: {description}</p>
        <p>routine: {routine.title} </p>
        {/* <button>likes: {likes}</button> */}


        </div>
    )
}

export default ActivitiesCard