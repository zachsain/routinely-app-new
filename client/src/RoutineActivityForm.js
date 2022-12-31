import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './App.css';

function RoutineAvivityForm({
    user,
    setUser, 
    addRoutineClick, 
    setAddRoutineClick,
    routines,
    routineCategory,
    routineTitle,
    routineId
}){
    console.log(user)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectRoutineClick, setSelectRoutineClick] = useState(false)
    const [selectUserRoutine, setSelectUserRoutine] = useState({})
    const [showUserRoutineSelection, setShowUserRoutineSelection] = useState(false)
    const [showInputForRoutine, setShowInputForRoutine] = useState(false)
    const [userWithNewActivity, setUserWithNewActivity] = useState({})
    const history = useHistory()
    const [allRouintes, setAllRoutines] = useState([])
    const [date, setDate] = useState("")

    const todayDate = new Date()
    const styledDate = `${todayDate.getMonth()+1}/${todayDate.getDate()}/${todayDate.getFullYear()}`
    // console.log(user.id)
    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        console.log(user)
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
              user_id : user.id,
              date : styledDate
            }),
          }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((a) =>{
                let userCopy = {...user}
                let updatedActivities = [...user.activities]
                updatedActivities.push(a)
                userCopy.activities = updatedActivities
                let newRoutine = routines.find(r => r.id === a.routine_id) 
                let upDatedRoutines = [...user.routines]
                upDatedRoutines.push(newRoutine)
                userCopy.routines = upDatedRoutines
                setUser(userCopy)
                history.push(`/activities/${a.id}`)
              })
             
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return(
      <div>
        <div>
        <form className="routine-activity-form"  onSubmit={handleSubmit}>
          <>
          <label className="activity-form-label">Category:</label>
          <input
            className="activity-input"
            type="text"
            id="category"
            autoComplete="off"
            placeholder="type of activity..."
            value={routineCategory}
            readOnly
          ></input>
          <br />
          <label className="activity-form-label">Routine: </label>
          <input className="activity-input"
            type="text"
            id="routine-title"
            autoComplete="off"
            placeholder="Routine..."
            value={routineTitle}
            readOnly
          ></input> 
          </> 
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
            placeholder="Duration..."
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          ></input>
          <br />

          <label id="notes-input" className="activity-form-label">Notes: </label>
          <textarea
            className="activity-input"
            type="text"
            // id="nts"
            autoComplete="off"
            placeholder="Notes on activity..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <br/>
          <button className="btn" type="submit">Add Activity</button>
        </form>
          
      </div>
    </div>
    )
}

export default RoutineAvivityForm