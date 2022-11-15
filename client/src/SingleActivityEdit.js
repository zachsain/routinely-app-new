import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import SingleActivity from "./SingleActivity";
import DisplayUserRoutines from './DisplayUserRoutines'


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
  // routineId
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
    // let {id} = useParams()

    // let singleActivity = user.activities.find((activity) => activity.id == id)

    let newActivity = {
      // "id" : activityId,
      "title" : updatedTitle,
      "category" : updatedCategory,
      "duration" : updatedDuration,
      "description" : updatedDescription,
      "routine_id" : routineId,
      "user_id" : user.id
    }

    function handleSubmit(e){
        e.preventDefault()
        setEditButtonClick(!editButtonClick)
        console.log(newActivity)

        // let updatedActivity = user.activities.find((a) => a.id === id)
        // updatedActivity.title = updatedTitle
        // updatedActivity.category = updatedCategory
        // updatedActivity.duration = updatedDuration
        // updatedActivity.description = updatedDescription


       let updatedActivities = user.activities.map((a) => {
         if (a.id === id){
         return {...a, 
          "title": updatedTitle,
          "category" : updatedCategory,
          "duration" : updatedDuration,
          "description" :updatedDescription
         }}
         return a
        })

        let updatedState = userStateCopy.activities = updatedActivities
        
        console.log(updatedState)
        console.log(updatedActivities)
        // console.log(userStateCopy.activities)
        // console.log(activityValue)
        
        // fetch(`/activities/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       "title" : updatedTitle,
        //       "category" : updatedCategory,
        //       "duration" : updatedDuration,
        //       "description" : updatedDescription,
        //       "routine_id" : routineId,
        //       "user_id" : user.id
        //     }),
        //   }).then((r) => {
        //     setIsLoading(false);
        //     if (r.ok) {
        //       r.json().then((a) =>{
        //         // setActiviyId(a.id)
        //         let updatedActivities = [...user.activities, a]
        //         user.activities = updatedActivities
        //         console.log(user)
        //         // setUserStateCopy(userStateCopy)
        //        return setUser(user)
        //       })
             
        //     } else {
        //       r.json().then((err) => setErrors(err.errors));
        //     }
        //   });
    }
    
    
    // setTitle(singleActivity.title)
    // setCategory(singleActivity.category)
    // setDuration(singleActivity.duration)

    // console.log(singleActivity.title)

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

    <label className="activity-form">Routine: </label>
    <input className="activity-input"
      type="text"
      id="routine-title"
      autoComplete="off"
      placeholder="Routine"
      value={routineTitle}
      onChange={(e) => setRoutineTitle(e.target.value)}
    ></input>
    
    {/* {showInputForRoutine ? (  
    <>
    <label className="activity-form">Routine: </label>
    <input className="activity-input"
      type="text"
      id="routine-title"
      autoComplete="off"
      placeholder="Routine"
      value={routineTitle}
      onChange={(e) => setRoutineTitle(e.target.value)}
    ></input> </>) : (null)} */}
  
    <br />

    <button onClick={handleRoutineSelectClick}>Select Routine</button>
     {selectRoutineClick ? (<DisplayUserRoutines 
     user={user} 
     setUser={setUser}
     selectRoutineClick={selectRoutineClick}
     setSelectRoutineClick={setSelectRoutineClick}
     setRoutineTitle={setRoutineTitle}
     showInputForRoutine={showInputForRoutine}
     setShowInputForRoutine={setShowInputForRoutine}
     setRoutineId={setRoutineId}
     

     />)
     :(null)}
    <br/>
    <button type="submit">Update</button>
  </form>
    
    </div>
</div>

    )
}

export default SingleActivityEdit