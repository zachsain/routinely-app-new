import React, {useState, useEffect} from "react";
import DisplayUserRoutines from './DisplayUserRoutines'
import './App.css';


function SingleActivityEdit({
  id,
  title,
  category, 
  duration, 
  description,
  user,
  setUser,
  editButtonClick,
  setEditButtonClick
}){
    const [updatedTitle, setUpdatedTitle] = useState("")
    const [updatedCategory, setUpdatedCategory] = useState("")
    const [updatedDescription, setUpdatedDescription] = useState("")
    const [updatedDuration, setUpdatedDuration] = useState("")
    const [routineTitle, setRoutineTitle] = useState("")
    const [selectRoutineClick, setSelectRoutineClick] = useState(false)
    const [showInputForRoutine, setShowInputForRoutine] = useState(false)
    const [routineId, setRoutineId] = useState()
    const [userStateCopy, setUserStateCopy] = useState(user)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setEditButtonClick(!editButtonClick)
        console.log(user)
        
        fetch(`/activities/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "title" : updatedTitle,
              "category" : updatedCategory,
              "duration" : updatedDuration,
              "description" : updatedDescription,
              "routine_id" : routineId,
              "user_id" : user.id
            }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((newActivity) => {
                let updatedActivities = userStateCopy.activities.map((a) => {
                  if (a.id === newActivity.id){
                  return {...a, 
                   "title": updatedTitle,
                   "category" : updatedCategory,
                   "duration" : updatedDuration,
                   "description" : updatedDescription
                  }}
                  return a
                 })
                userStateCopy.activities = updatedActivities
                setUser({...userStateCopy})
              })
             
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }
    


    function handleRoutineSelectClick(e){
        e.preventDefault()
        setSelectRoutineClick(!selectRoutineClick)
    }

    return (
        <div>
        <div id="new-activity-form">
  
  <form onSubmit={handleSubmit}>
    <label className="activity-form">Title:</label>
    <input
      className="activity-input"
      type="text"
      id="title"
      autoComplete="off"
      placeholder={title}
      value={updatedTitle}
      onChange={(e) => setUpdatedTitle(e.target.value)}
          ></input>
    <br />

    <label className="activity-form">Category:</label>
    <input
      className="activity-input"
      type="text"
      id="category"
      autoComplete="off"
      placeholder={category}
      value={updatedCategory}
      onChange={(e) => setUpdatedCategory(e.target.value)}
    ></input>
    <br />

    <label className="activity-form">Duration: </label>
    <input
      className="activity-input"
      type="text"
      id="duration"
      autoComplete="off"
      placeholder={duration}
      value={updatedDuration}
      onChange={(e) => setUpdatedDuration(e.target.value)}
    ></input>
    <br />

    <label className="activity-form">Description: </label>
    <input
      className="activity-input"
      type="text"
      id="description"
      autoComplete="off"
      placeholder={description}
      value={updatedDescription}
      onChange={(e) => setUpdatedDescription(e.target.value)}
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

    <button className="btn" onClick={handleRoutineSelectClick}>Select Routine</button>
     {selectRoutineClick ? (<DisplayUserRoutines 
     selectRoutineClick={selectRoutineClick}
     setSelectRoutineClick={setSelectRoutineClick}
     setRoutineTitle={setRoutineTitle}
     showInputForRoutine={showInputForRoutine}
     setShowInputForRoutine={setShowInputForRoutine}
     setRoutineId={setRoutineId}
     />)
     :(null)}
    <br/>
    <button className="btn" type="submit">Update</button>
  </form>
    
    </div>
</div>

    )
}

export default SingleActivityEdit