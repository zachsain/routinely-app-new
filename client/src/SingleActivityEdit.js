import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import SingleActivity from "./SingleActivity";
import DisplayUserRoutines from './DisplayUserRoutines'


function SingleActivityEdit({user, setUser}){

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [routineTitle, setRoutineTitle] = useState("")
    const [selectRoutineClick, setSelectRoutineClick] = useState(false)
    const [showInputForRoutine, setShowInputForRoutine] = useState(false)
    const [routineId, setRoutineId] = useState()
    let {id} = useParams()

    let singleActivity = user.activities.find((activity) => activity.id == id)
    
    // setTitle(singleActivity.title)
    // setCategory(singleActivity.category)
    // setDuration(singleActivity.duration)

    console.log(singleActivity.title)

    function handleSubmit(){

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
      placeholder={singleActivity.title}
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
      placeholder={singleActivity.category}
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
      placeholder={singleActivity.duration}
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
      placeholder={singleActivity.description}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
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