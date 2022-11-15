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
    routineId
}){
    const [isClicked, setIsClicked] = useState(false)
    const [copyOfState, setCopyOfState] = useState(null)
    const [updateActivity, setaUpdateActivity] = useState()
    const [editButtonClick, setEditButtonClick] = useState(false)

    useEffect(() => {
        setCopyOfState(user)
    }, [user])

    function handleDeleteActivity(e){
        console.log(e)
        // setCopyOfState(user)
        let filteredActivities = user.activities.filter((activity) => activity.id !== id)
        console.log(filteredActivities)
        copyOfState.activities = filteredActivities       
        console.log(copyOfState)
        fetch(`/activities/${id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                setUser(copyOfState);
              }
            })
            .catch((err) => console.log(err))
    }



    const history = useHistory();
    // useCallback(() => history.push(`/activities/${id}`));

    function handleEditClick(){
        // history.push(`/activities/${id}`)
        setEditButtonClick(!editButtonClick)
    }
    // const routine = user.routines.filter(r => r.id === routineId)

    // console.log(routine)
    // routine.forEach(element => {
    //     console.log(element.title)
    // });

    return(
        
        <div className="activity-container">
        <h3>Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        {/* <p>Routine Used: {routine[0].title} </p>  */}
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