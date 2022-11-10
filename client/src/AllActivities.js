import React, {useState} from 'react'
import UserActivitiesCard from './UserActivitiesCard'
import ActivityForm from './ActivityForm'


function AllActivities({user, setUser}){

    const [addRoutineClick, setAddRoutineClick] = useState(false)

    let activities = user.activities.map(a => {
      return <UserActivitiesCard 
        user={user}
        key={a.id} 
        title={a.title}
        category={a.categpry}
        duration={a.duration}
        description={a.description}
        />
    })

    function handleClick(e){
        setAddRoutineClick(!addRoutineClick)
    }
    
    // console.log(user.activities)

    return(
        <div className='activity-container'>
            {addRoutineClick ? (<h3>Activity Form</h3>) : (<h3>My Activites:</h3>)}
            <button onClick={handleClick}>Add Activity</button>
            {addRoutineClick ? (
            <div><ActivityForm user={user} setUser={setUser}/> </div>) : (<div> {activities}</div>)}
        </div>
    )
}

export default AllActivities
