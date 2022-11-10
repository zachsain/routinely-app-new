import React, {useState, useCallback} from "react";
import DisplayUserRoutines from './DisplayUserRoutines'
import { useHistory } from "react-router-dom";


function ActivityForm({user, setUser}){
    
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectRoutineClick, setSelectRoutineClick] = useState(false)
    const [selectUserRoutine, setSelectUserRoutine] = useState({})
    // const [userRoutineValue, setUserRoutineValue] = useState("")
    const [showUserRoutineSelection, setShowUserRoutineSelection] = useState(false)
    const [routineTitle, setRoutineTitle] = useState("")
    // const [routineCategory, setRoutineCategory] = useState("")
    // const [routineDuration, setRoutineDuration] = useState("")
    // const [routineInstructions, setRoutineInstructions] = useState("")
    const [showInputForRoutine, setShowInputForRoutine] = useState(false)
    const [routineId, setRoutineId] = useState()
    const [userWithNewActivity, setUserWithNewActivity] = useState({})
    const history = useHistory()
   
    const [newState, setNewState] = useState(user)

    let newActivity = {
      "title" : title,
      "category" : category,
      "duration" : duration,
      "description" : description,
      "routine_id" : routineId,
      "user_id" : user.id
    }


    function handleSubmit(e){
      setShowUserRoutineSelection(!showUserRoutineSelection)
        // setNewState(user)
        // console.log(newState)
        // console.log(newActivity)
        // let testForState = [...newState, newActivity]
        // console.log([...newState, testForState])
        // let newActivityAdd;
        // console.log(testForState)
        
        e.preventDefault()
        console.log(routineId)
        console.log(user.id)
        fetch("/activities", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              category,
              description,
              duration,
              routine_id : routineId,
              user_id : user.id
            }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              history.push('/activities');
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
          // setUser([...user.activities, activity])
    }

    // if (r.ok) {
    //   r.json().then((activity) => console.log([...user.activities, activity]));
    // } else {
    //   r.json().then((err) => setErrors(err.errors));
    // }

    function handleRoutineSelectClick(e){
        e.preventDefault()
        setSelectRoutineClick(!selectRoutineClick)
    }

    // function handleRoutineSelection(e){
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     // setSelectRoutineClick(!selectRoutineClick)
    // }

    // function handleChange(e){
    //     e.preventDefault()
    //     setSelectUserRoutine(e.target.value)
    //     console.log(selectUserRoutine)
    // }   
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
          onChange={(e) => setRoutineTitle(e.target.value)}
        ></input> </>) : (null)}
      
        <br />

        <button onClick={handleRoutineSelectClick}>Select Routine</button>
         {selectRoutineClick ? (<DisplayUserRoutines 
         user={user} 
         setUser={setUser}
         selectRoutineClick={selectRoutineClick}
         setSelectRoutineClick={setSelectRoutineClick}
         setRoutineTitle={setRoutineTitle}
        //  setRoutineCategory={setRoutineCategory}
        //  setRoutineDuration={setRoutineDuration}
        //  setRoutineInstructions={setRoutineInstructions}
         showInputForRoutine={showInputForRoutine}
         setShowInputForRoutine={setShowInputForRoutine}
         setRoutineId={setRoutineId}
         

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


// <DisplayUserRoutines 
//          user={user} 
//          setUser={setUser}
//          selectRoutineClick={selectRoutineClick}
//          setSelectRoutineClick={setSelectRoutineClick}
//          setRoutineTitle={setRoutineTitle}
//          setRoutineCategory={setRoutineCategory}
//          setRoutineDuration={setRoutineDuration}
//          setRoutineInstructions={setRoutineInstructions}
//          showInputForRoutine={showInputForRoutine}
//          setShowInputForRoutine={setShowInputForRoutine}