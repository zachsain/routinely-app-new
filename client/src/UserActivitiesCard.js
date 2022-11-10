import React, {useState, useCallback} from "react";
import { useHistory} from 'react-router-dom';

function UserActivitiesCard({
    id,
    title,
    category, 
    duration, 
    description,
    user,
    setUser,
    routine_id
}){
    const [isClicked, setIsClicked] = useState(false)
    const [copyOfState, setCopyOfState] = useState(user)

    // const [formData, setFormData] = useState()


    function handleDeleteActivity(e){
        setCopyOfState(user)
        let filteredActivities = user.activities.filter((activity) => {
          return  activity.id !== id
        })
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
    const handleOnClick = useCallback(() => history.push(`/activities/${id}`));

    const routine = user.routines.filter(r => r.id === routine_id)

    // console.log(routine)

    return(
        
        <div className="activity-container">
        <h3 onClick={handleOnClick}>Activity: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Notes: {description}</p>
        <p>Routine Used: {routine.title} </p> 
        <button onClick={handleDeleteActivity} className='delete-activity-button'>x</button>
        </div>
        
    )

}

export default UserActivitiesCard