import React, {useState} from 'react'
import './App.css'

function RoutineForm({user, setUser}){

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [instructions, setInstructions] = useState("")
    const [duration, setDuration] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
        
    function handleSubmit(e){
        console.log(e)
        fetch("/routines", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              category,
              instructions,
              duration,
              // user_id: user.id     
            }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => setUser(user));
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
  
            <button type="submit">Add Routine</button>
          </form>
        </div>
      </>
    )
}

export default RoutineForm