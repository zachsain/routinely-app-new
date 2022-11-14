import React, {useState, useEffect} from "react";
import { useHistory} from 'react-router-dom';

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
    const history = useHistory();
    const [isClicked, setIsClicked] = useState(false)
    const [copyOfState, setCopyOfState] = useState(null)

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
                // history.push("/activities")
                // console.log(copyOfState)
                setUser(copyOfState);
              }
            })
            .catch((err) => console.log(err))
    }



    // const history = useHistory();
    // const handleOnClick = useCallback(() => history.push(`/activities/${id}`));

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
        </div>
        
    )

}

export default UserActivitiesCard