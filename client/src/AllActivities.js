import React, {useState, useEffect} from 'react'
import UserActivitiesCard from './UserActivitiesCard'
import ActivityForm from './ActivityForm'


function AllActivities({user, setUser}){

    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [addActivityClick, setAddActivityClick] = useState(false)

    let activities = user.activities.map(a => {
      return <UserActivitiesCard 
        key={a.id} 
        id={a.id}
        user={user}
        setUser={setUser}
        title={a.title}
        category={a.category}
        duration={a.duration}
        description={a.description}
        routineId={a.routine_id}
        />
    })

    function handleClick(e){
        setAddRoutineClick(!addRoutineClick)
        setAddActivityClick(!addActivityClick)
    }
    
    // console.log(user.activities)

    return(
        <div className='activity-container'>
            {addRoutineClick ? (<h3>Activity Form</h3>) : (<h3>My Activites:</h3>)}
            <button onClick={handleClick}>{addActivityClick ? "See Activities" : "Create New Activity"}</button>
            {addRoutineClick ? (
            <div><ActivityForm 
            addRoutineClick={addRoutineClick} 
            setAddRoutineClick={setAddRoutineClick}
            user={user} setUser={setUser}/> </div>) 
            : (<div> {activities}</div>)}
        </div>
    )
}

export default AllActivities
