import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ActivitiesCard from "./ActivitiesCard";

function SingleRoutine(){
    const [routine, setRoutine] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    

    let { id } = useParams();
    console.log(routine.activities)
    let displayActivites;

    if (isLoaded == true) {
        displayActivites = routine.activities.map(a => {
        console.log(a)
     return <ActivitiesCard 
              key={a.id} 
              title={a.title}
              category={a.categpry}
              duration={a.duration}
              description={a.description}
              id={a.id}/>
    }) } else {
        displayActivites = null
    }


    useEffect(() => {
        fetch(`${id}`)
        .then(r => r.json())
        .then(routine => (setRoutine(routine), console.log(routine), setIsLoaded(true)))
     
    }, [])

    

    return (
        <div className="routine-container">
        <h3>Title: {routine.title} </h3>
        <p>Category: {routine.category}</p>
        <p>Duration: {routine.duration}</p>
        <p>Instructions: {routine.instructions}</p>
        {/* <h4>Associated Activities:</h4> */}
        {displayActivites}

        </div>

    )
}

export default SingleRoutine