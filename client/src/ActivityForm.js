import React, {useState} from "react";
import DisplayUserRoutines from './DisplayUserRoutines'


function ActivityForm({user, setUser}){
    
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectRoutineClick, setSelectRoutineClick] = useState(false)
    const [selectUserRoutine, setSelectUserRoutine] = useState({})
    const [userRoutineValue, setUserRoutineValue] = useState("")
    const [showUserRoutineSelection, setShowUserRoutineSelection] = useState(false)
    const [routineTitle, setRoutineTitle] = useState("")
    const [routineCategory, setRoutineCategory] = useState("")
    const [routineDuration, setRoutineDuration] = useState("")
    const [routineInstructions, setRoutineInstructions] = useState("")
    const [showInputForRoutine, setShowInputForRoutine] = useState(false)
 
    function handleSubmit(e){
        e.preventDefault()
        console.log(routineTitle)
        console.log(routineCategory)
        console.log(routineDuration)
        console.log(routineInstructions)
        // fetch("/user_routines", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       title,
        //       category,
        //       instructions,
        //       duration,
        //       user_id: user.id     
        //     }),
        //   }).then((r) => {
        //     setIsLoading(false);
        //     if (r.ok) {
        //       r.json().then((user) => setUser(user));
        //     } else {
        //       r.json().then((err) => setErrors(err.errors));
        //     }
        //   });

    }

    function handleRoutineSelectClick(e){
        e.preventDefault()
        setSelectRoutineClick(!selectRoutineClick)
    }

    // function handleRoutineSelection(e){
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     // setSelectRoutineClick(!selectRoutineClick)
    // }

    function handleChange(e){
        e.preventDefault()
        setSelectUserRoutine(e.target.value)
        console.log(selectUserRoutine)
    }   
    return(
        <div>
            <div id="new-activity-form">
      
      <form onSubmit={handleSubmit}>
        <label className="activity-form">Title:</label>
        <input
          className="activity-input"
          type="text"
          id="title"
          autoComplete="off"
          placeholder="title of activity..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
              ></input>
        <br />

        <label className="activity-form">Category:</label>
        <input
          className="activity-input"
          type="text"
          id="category"
          autoComplete="off"
          placeholder="type of activity..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <br />

        <label className="activity-form">Duration: </label>
        <input
          className="activity-input"
          type="text"
          id="duration"
          autoComplete="off"
          placeholder="duration..."
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        ></input>
        <br />

        <label className="activity-form">Description: </label>
        <input
          className="activity-input"
          type="text"
          id="description"
          autoComplete="off"
          placeholder="Notes on activity..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <br/>
        {showInputForRoutine ? (  
        <>
        <label className="activity-form">Routine: </label>
        <input className="activity-input"
          type="text"
          id="routine-title"
          autoComplete="off"
          placeholder="Routine"
          value={routineTitle}
        ></input> </>) : (null)}
      
        <br />

        <button onClick={handleRoutineSelectClick}>Select Routine</button>
         {selectRoutineClick ? (<DisplayUserRoutines 
         user={user} 
         setUser={setUser}
         selectRoutineClick={selectRoutineClick}
         setSelectRoutineClick={setSelectRoutineClick}
         setRoutineTitle={setRoutineTitle}
         setRoutineCategory={setRoutineCategory}
         setRoutineDuration={setRoutineDuration}
         setRoutineInstructions={setRoutineInstructions}
         showInputForRoutine={showInputForRoutine}
         setShowInputForRoutine={setShowInputForRoutine}
         

         />)
         :(null)}
        <br/>
        <button type="submit">Add Activity</button>
      </form>
        
        </div>
    </div>
    )
}

export default ActivityForm