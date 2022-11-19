import React, {useState, useEffect} from 'react'
import UserActivitiesCard from './UserActivitiesCard'
import ActivityForm from './ActivityForm'


function AllActivities({user, setUser}){

    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [addActivityClick, setAddActivityClick] = useState(false)
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(r => setRoutines(r))
     
    },[])

    let activities = user.activities.reverse().map(a => {
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
        routines={routines}
        />
    })

    function handleClick(e){
        setAddRoutineClick(!addRoutineClick)
        setAddActivityClick(!addActivityClick)
    }

    // if (user.activities.length === 0) {
    //     setAddRoutineClick(false)
    // }

    // user.activities.length > 0 ? (setAddRoutineClick(true)) : (setAddRoutineClick(false))
    
    // console.log(user.activities)

    console.log(user.activities.length)
    return(
        <div>{user.activities.length > 0 ? (
            <div className='activity-container'>
            {addRoutineClick ? (<h3>Activity Form</h3>) : (<h3>My Activites:</h3>)}
            <button onClick={handleClick}>{addActivityClick ? "See Activities" : "Create New Activity"}</button>
             {addRoutineClick ? (
            <div><ActivityForm 
            addRoutineClick={addRoutineClick} 
            setAddRoutineClick={setAddRoutineClick}
            user={user} 
            setUser={setUser}
            routines={routines}
            /> </div>) 
            : (<div> {activities}</div>)}
        </div> 
        ) : (
            <div className='activity-container'> 
            <h3>Activity Form</h3>
            <ActivityForm 
            addRoutineClick={addRoutineClick} 
            setAddRoutineClick={setAddRoutineClick}
            user={user} 
            setUser={setUser}
            routines={routines}
            /> 
        </div>   
        )}
        </div>



        // <div className='activity-container'>
        //     {addRoutineClick ? (<h3>Activity Form</h3>) : (<h3>My Activites:</h3>)}
        //     <button onClick={handleClick}>{addActivityClick ? "See Activities" : "Create New Activity"}</button>
        //      {addRoutineClick ? (
        //     <div><ActivityForm 
        //     addRoutineClick={addRoutineClick} 
        //     setAddRoutineClick={setAddRoutineClick}
        //     user={user} 
        //     setUser={setUser}
        //     routines={routines}
        //     /> </div>) 
        //     : (<div> {activities}</div>)}
        // </div> 
    )
}

export default AllActivities


{/* <div className='activity-container'>
            {addRoutineClick ? (<h3>Activity Form</h3>) : (<h3>My Activites:</h3>)}
            <button onClick={handleClick}>{addActivityClick ? "See Activities" : "Create New Activity"}</button>
             {addRoutineClick ? (
            <div><ActivityForm 
            addRoutineClick={addRoutineClick} 
            setAddRoutineClick={setAddRoutineClick}
            user={user} 
            setUser={setUser}
            routines={routines}
            /> </div>) 
            : (<div> {activities}</div>)}
        </div> */}