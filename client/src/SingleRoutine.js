import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ActivitiesCard from "./ActivitiesCard";
import Video from "./Video";
import ReactPlayer from 'react-player/youtube'

function SingleRoutine(){
    const [routine, setRoutine] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    let { id } = useParams();
    let displayActivites;

    if (isLoaded == true) {
        displayActivites = routine.activities.map(a => {
     return <ActivitiesCard 
              key={a.id} 
              title={a.title}
              category={a.category}
              duration={a.duration}
              description={a.description}
              id={a.id}/>
    }) } else {
        displayActivites = null
    }


    useEffect(() => {
        fetch(`${id}`)
        .then(r => r.json())
        .then(routine => (setRoutine(routine), setIsLoaded(true)))
     
    }, [])

    

    return (
        <div className="routine-container">
        <h3>Title: {routine.title} </h3>
        <p>Category: {routine.category}</p>
        <p>Duration: {routine.duration}</p>
        <p>Instructions: {routine.instructions}</p>
        {/* <Video /> */}
        <ReactPlayer controls={true} url={routine.video_url} />
        {/* <video controls width="100%">
         <source src="https://www.youtube.com/watch?v=IB_icWRzi4E&ab_channel=TechInsider" type="video/mp4" />
     
        </video> */}
        {/* <h4>Associated Activities:</h4> */}
        {displayActivites}

        </div>

    )
}

export default SingleRoutine