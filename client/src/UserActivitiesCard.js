import React, {useState, useEffect} from "react";
import { useHistory} from 'react-router-dom';
import SingleActivityEdit from "./SingleActivityEdit";
import { FaTimesCircle } from "react-icons/fa";
import './App.css';

function UserActivitiesCard({
    id,
    title,
    category, 
    duration, 
    description,
    user,
    setUser,
    routineId,
    routines,
    date
}){
    const [isClicked, setIsClicked] = useState(false)
    const [copyOfState, setCopyOfState] = useState(user)
    const [updateActivity, setaUpdateActivity] = useState()
    const [editButtonClick, setEditButtonClick] = useState(false)
    const history = useHistory();

    function handleDeleteActivity(e){
        e.preventDefault()
        let filteredActivities = copyOfState.activities.filter((activity) => activity.id !== id)
        copyOfState.activities = filteredActivities       
        fetch(`/activities/${id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                setUser({...copyOfState});
              }
            })
            .catch((err) => console.log(err))
    }

    function handleActivityClick(e){
      e.preventDefault()
      history.push(`/activities/${id}`)
    }

    function handleEditClick(){
        setEditButtonClick(!editButtonClick)
    }
    const activityRoutine = routines.filter(r => r.id === routineId)
    // console.log(activityRoutine[0].title)

    return(
        
        <div className="activity-container">
        <h3 onClick={handleActivityClick}>Activity: {title}</h3>
        <p>Category: {category}</p> 
        <p>{date}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>

        {/* <p>Routine Used: {activityRoutine[0].title} </p>  */}
        <button 
          className="btn"
          onClick={handleDeleteActivity}
        >
          <FaTimesCircle  size="1.6em" id="delete-btn"/>
        </button>
        <br/>
        <button className="btn" onClick={handleEditClick}>Edit</button>
        {editButtonClick ? (
        <SingleActivityEdit 
        id={id}
        title={title}
        category={category} 
        duration={duration}
        description={description}
        user={user}
        setUser={setUser}
        routineId={routineId}
        editButtonClick={editButtonClick}
        setEditButtonClick={setEditButtonClick}
        />) : (null)}
        </div>
        
    )

}

export default UserActivitiesCard