import React, {useState} from 'react'
import './App.css'
import {useHistory} from "react-router-dom";

function RoutineForm({setRoutines, routines, addRoutineClick, setAddRoutineClick}){

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [instructions, setInstructions] = useState("")
    const [duration, setDuration] = useState("")
    const [videoUrl, setVideoUrl] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
        
    function handleSubmit(e){
      // console.log(videoUrl)
        e.preventDefault()  
        setAddRoutineClick(!addRoutineClick)
        
        fetch("/routines", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "title" : title,
              "category" : category,
              "instructions" : instructions,
              "duration" : duration,
              "video_url" : videoUrl
    
            }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((newRoutine) => {
                console.log(newRoutine)
                setRoutines([newRoutine, ...routines])
                // history.push(`routines/${newRoutine.id}`);
              } );
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

    }

    
    
    return(
        <>
        <div id="new-routine-form">
      
          <form onSubmit={handleSubmit}>
            <label className="routine-form">Title:</label>
            <input
              className="routine-input"
              type="text"
              id="title"
              autoComplete="off"
              placeholder="title of routine..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
                  ></input>
            <br />
  
            <label className="routine-form">Category:</label>
            <input
              className="routine-input"
              type="text"
              id="category"
              autoComplete="off"
              placeholder="type of routine..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></input>
            <br />

            <label className="routine-form">Duration: </label>
            <input
              className="routine-input"
              type="text"
              id="duration"
              autoComplete="off"
              placeholder="duration..."
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            ></input>
            <br />
  
            <label className="routine-form">Instructions: </label>
            <input
              className="routine-input"
              type="text"
              id="instructions"
              autoComplete="off"
              placeholder="Instructions..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></input>
            <br />

            <label className="routine-form">Helpful YouTube Video: </label>
            <input
              className="routine-input"
              type="text"
              id="video"
              autoComplete="off"
              placeholder="Upload helpful video.."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            ></input>

            {/* <label>Youtube URL</label>
            <input type="text"
            placeholder='YOUTUBE LINK'
            >

            </input> */}
             {/* <button>?</button> */}
            <br />
  
            <button type="submit">Add Routine</button>
          </form>
        </div>
      </>
    )
}

export default RoutineForm