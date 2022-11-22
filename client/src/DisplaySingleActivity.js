import React, {useState} from 'react'
import SingleActivityRoutine from './SingleActivityRoutine'
import './App.css';

function DisplaySingleActivity({
    id,
    title,
    category,
    duration,
    description,
    routine,
    date,
    isLoaded
}) {


    return(
        
        <div className="activity-container">
        <h3 >Activity: {title}</h3>
        <p>{date}</p>
        <p>Category: {routine.category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <SingleActivityRoutine
        title={routine.title}
        category={routine.category} 
        instructions={routine.instructions}
        duration={routine.duration}
        id={routine.id}
        />
        </div>
        
    )


}

export default DisplaySingleActivity

