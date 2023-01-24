import React, {useState, useCallback} from "react";
import DisplayUserRoutines from './DisplayUserRoutines'
import { useHistory } from "react-router-dom";
import DisplayErrors from "./DisplayErrors";
import './App.css';


function ActivityForm({
    user,
    setUser, 
    addRoutineClick, 
    setAddRoutineClick,
    routines}){
    
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false)
    const [selectRoutineClick, setSelectRoutineClick] = useState(false)
    const [routineTitle, setRoutineTitle] = useState("")
    const [showInputForRoutine, setShowInputForRoutine] = useState(false)
    const [routineId, setRoutineId] = useState()
    const history = useHistory() 
    const todayDate = new Date()
    const styledDate = `${todayDate.getMonth()+1}/${todayDate.getDate()}/${todayDate.getFullYear()}`

    function handleSubmit(e){
        e.preventDefault()
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
              date : styledDate
            }),
          }).then((r) => {
            if (r.ok) {
              history.push('/activities')
              r.json().then((a) =>{
                setAddRoutineClick(!addRoutineClick)
                let userCopy = {...user}
                let updatedActivities = [...user.activities]
                updatedActivities.push(a)
                userCopy.activities = updatedActivities
                let newRoutine = routines.find(r => r.id === a.routine_id) 
                let upDatedRoutines = [...user.routines]
                upDatedRoutines.push(newRoutine)
                userCopy.routines = upDatedRoutines
                setUser(userCopy)
              })
             
            } else {
              r.json().then((err) => setErrors(err.errors),  setAddRoutineClick(true), setShowErrors(true));
            }
          });
    }

    function handleRoutineSelectClick(e){
        e.preventDefault()
        setSelectRoutineClick(!selectRoutineClick)
        setShowInputForRoutine(!showInputForRoutine)
    }
 
    let errorMsg = errors.map((e) => {
         return <DisplayErrors key={e[0]} error={e} />
    })

    return(
      <div>
      <div id="new-activity-form-container">
      <form className="activity-form" onSubmit={handleSubmit}>
      <button 
          className="btn" 
          id="select-routine-btn" 
          onClick={handleRoutineSelectClick}>
          Select Routine
      </button>
         {selectRoutineClick ? (
         <DisplayUserRoutines 
            user={user} 
            setUser={setUser}
            selectRoutineClick={selectRoutineClick}
            setSelectRoutineClick={setSelectRoutineClick}
            setRoutineTitle={setRoutineTitle}
            showInputForRoutine={showInputForRoutine}
            setShowInputForRoutine={setShowInputForRoutine}
            setRoutineId={setRoutineId}
            setCategory={setCategory}
         />)
         :(null)}
        <br/>

        <label className="activity-form-label">Title:</label>
        <input
          className="activity-input"
          type="text"
          id="title"
          autoComplete="off"
          placeholder="Title of activity..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ></input>
        <br />

        <label className="activity-form-label">Duration: </label>
        <input
          className="activity-input"
          type="text"
          id="duration"
          autoComplete="off"
          placeholder="Duration of activity..."
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        ></input>
        <br />

        <label id="notes-input" className="activity-form-label">Notes: </label>
        <textarea
          className="activity-input"
          type="text"
          id="notes"
          autoComplete="off"
          placeholder="Notes on activity..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <br/>

        {showInputForRoutine ? (  
        <>
        <label className="activity-form-label">Category:</label>
        <input
          className="activity-input"
          type="text"
          id="category"
          autoComplete="off"
          placeholder="type of activity..."
          value={category}
          readOnly
        ></input>
        <br />
        <label className="activity-form-label">Routine Selected: </label>
        <input 
          className="activity-input"
          type="text"
          id="routine-title"
          autoComplete="off"
          placeholder="Routine"
          value={routineTitle}
          readOnly
        ></input> </>) 
        : (null)
        } 
        {showErrors ? (errorMsg) : (null)}
        <br/>
        <button className="btn" type="submit">Add Activity</button>
      </form>
        
        </div>
    </div>
    )
}

export default ActivityForm
