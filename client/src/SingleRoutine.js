import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import ShowRoutineActivities from "./ShowRoutineActivities";
import Video from "./Video";
import ReactPlayer from 'react-player/youtube'
import './App.css';

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
     return <ShowRoutineActivities 
              key={a.id} 
              title={a.title}
              category={a.category}
              duration={a.duration}
              description={a.description}
              id={a.id}
              date={a.date}
            />
    }) } else {
        displayActivites = null
    }

    return (
        <div>
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
        </div>
        {routine.activities === "" ? (
               null
        ) : (
            <div> 
            {displayActivites}
            </div>
        )}
        </div>

    )
}

export default SingleRoutine