import React, {useState, useEffect} from "react";
import { useHistory} from 'react-router-dom';
import SingleActivityEdit from "./SingleActivityEdit";
import { FaTimesCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
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
        let filterUserRoutine = copyOfState.routines.filter((r) => r.id !== routineId)
        console.log(copyOfState.routines)
        copyOfState.activities = filteredActivities     
        copyOfState.routines = filterUserRoutine     
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

    return(
        
        <div className="activity-container">
          <div className='card-click' onClick={handleActivityClick}>
            <h3>Activity: {title}</h3>
            <p>Category: {category}</p> 
            <p>Duration: {duration}</p>
            <p>Notes: {description}</p>
            <h5 id="activity-date">{date}</h5>
          </div>
          
          <button 
            id="delete-btn"
            className="btn"
            onClick={handleDeleteActivity}
          >
          <FaTimesCircle  size="1.7em" id="delete-btn-icon"/>
          </button>
          <br/>
          <button id="edit-btn" className="btn" onClick={handleEditClick}><FiEdit size="1.7em" id="edit-btn-icon"/></button>
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