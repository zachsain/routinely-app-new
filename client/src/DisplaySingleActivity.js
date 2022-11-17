import React, {useState} from 'react'
import ActivitiesCard from './ActivitiesCard'
import SingleActivityRoutine from './SingleActivityRoutine'

function DisplaySingleActivity({
    id,
    title,
    category,
    duration,
    description,
    routine,
    isLoaded
}) {

    // let routine

    // if (isLoaded == true) {
    //     displayActivites = routine.activities.map(a => {
    //  return <ActivitiesCard 
    //           key={a.id} 
    //           title={a.title}
    //           category={a.category}
    //           duration={a.duration}
    //           description={a.description}
    //           id={a.id}/>
    // }) } else {
    //     displayActivites = null
    // }

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

