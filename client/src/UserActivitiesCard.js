import React, {useState, useEffect} from "react";
import { useHistory} from 'react-router-dom';
import SingleActivityEdit from "./SingleActivityEdit";

function UserActivitiesCard({
    id,
    title,
    category, 
    duration, 
    description,
    user,
    setUser,
    routineId,
    allRoutines
}){


    
    const [isClicked, setIsClicked] = useState(false)
    const [copyOfState, setCopyOfState] = useState(user)
    const [updateActivity, setaUpdateActivity] = useState()
    const [editButtonClick, setEditButtonClick] = useState(false)

    // useEffect(() => {
    //     setCopyOfState(user)
    // }, [user])

    // console.log(copyOfState)

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



    const history = useHistory();
    // useCallback(() => history.push(`/activities/${id}`));

    function handleEditClick(){
        setEditButtonClick(!editButtonClick)
    }
    const routine = user.routines.filter(r => r.id === routineId)

    // console.log(routine)
  //  let displayTitle = routine.map(r => {
  //     console.log(r)
  //   });

    console.log(routine)
    // console.log(displayTitle)

  //   console.log(routineTitle)

    return(
        
        <div className="activity-container">
        <h3>Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <p>Routine Used: {routine[0].title} </p> 
        <button onClick={handleDeleteActivity} className='delete-activity-button'>x</button>
        <button onClick={handleEditClick}>Edit</button>
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