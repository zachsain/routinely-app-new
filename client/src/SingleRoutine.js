import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ActivitiesCard from "./ActivitiesCard";
import Video from "./Video";
import ReactPlayer from 'react-player/youtube'

function SingleRoutine(){
    const [routine, setRoutine] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    let { id } = useParams();
    const [displayVideo, setDisplayVideo] = useState(false)
    let displayActivites;

    useEffect(() => {
        fetch(`${id}`)
        .then(r => r.json())
        .then(routine => (setRoutine(routine), setIsLoaded(true)))
     
    }, [])

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

    // if  (routine.video_url === ""){
    //    return setDisplayVideo(true)
    // }

    console.log(routine)

    console.log(routine)
    

    return (
        <div className="routine-container">
        <h3>Title: {routine.title} </h3>
        <p>Category: {routine.category}</p>
        <p>Duration: {routine.duration}</p>
        <p>Instructions: {routine.instructions}</p>
        {routine.video_url == "" ? (
            null
        ) : (
            <div>
            <h4>Helpful Video:</h4>
            <ReactPlayer controls={true} url={routine.video_url} />
            </div>
        )}
        {displayActivites}

        </div>

    )
}

export default SingleRoutine