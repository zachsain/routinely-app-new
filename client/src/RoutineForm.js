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
                setRoutines([newRoutine, ...routines])
              } );
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

    }
      
    return(
        <>
        <div>
          <form  className="activity-form" onSubmit={handleSubmit}>
            <label className="routine-form">Title:</label>
            <input
              className="routine-input"
              type="text"
              id="title"
              autoComplete="off"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
                  ></input>
            <br />
  
            <label className='routine-form'>Select Category:
              <select id="routine-select-btn" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value={null}></option>
                <option value="Weight Training">Weight Training</option>
                <option value="Cardio">Cardio</option>
                <option value="Sports Training">Sports Training</option>
                <option value="Diet">Cooking</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Music">Music</option>
                <option value="Yoga">Yoga</option>
                <option value="Meditation">Meditation</option>
              </select>
            
            </label>
            <br />

            <label className="routine-form">Duration: </label>
            <input
              className="routine-input"
              type="text"
              id="duration"
              autoComplete="off"
              placeholder="Duration..."
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            ></input>
            <br />
  
            <label className="routine-form">Instructions: </label>
            <textarea
              className="routine-input"
              type="text"
              id="instructions"
              autoComplete="off"
              placeholder="Instructions..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
            <br />

            <label className="routine-form">Helpful YouTube Video: </label>
            <input
              className="routine-input"
              type="text"
              id="video"
              autoComplete="off"
              placeholder="Upload helpful video"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            ></input>            
            <br />
  
            <button className="btn" type="submit">Add Routine</button>
          </form>
        </div>
      </>
    )
}

export default RoutineForm