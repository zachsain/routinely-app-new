import React, {useState} from 'react'
import './App.css'

function RoutineForm({user}){

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [instructions, setInstructions] = useState("")
    const [duration, setDuration] = useState("")
        
    function handleSubmit(e){
        console.log(e)
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
  
            <label className="routine-form">Category: </label>
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
  
            <button type="submit">Add Routine</button>
          </form>
        </div>
      </>
    )
}

export default RoutineForm