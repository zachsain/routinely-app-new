import React, {useState} from 'react'
import ActivitiesCard from './ActivitiesCard'
import SingleActivityRoutine from './SingleActivityRoutine'

function DisplaySingleActivity({
    id,
    title,
    category,
    duration,
    description,
    routine
}) {

    return(
        
        <div className="activity-container">
        <h3 >Activity: {title}</h3>
        <p>Category: {category}</p>
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

