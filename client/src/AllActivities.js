import React, {userState} from 'react'
import UserActivitiesCard from './UserActivitiesCard'


function AllActivities({user, setUser}){

    let activities = user.activities.map(a => {
      return <UserActivitiesCard 
        user={user}
        key={a.id} 
        title={a.title}
        category={a.categpry}
        duration={a.duration}
        description={a.description}
        routine_id = {a.routine_id}
        id={a.id}/>
    })
  
    return(
        <div className='activity-container'>
            <h3>My Activites: </h3>
            {activities}
        </div>
    )
}

export default AllActivities