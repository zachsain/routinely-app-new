import React, {useState} from 'react'
import ActivitiesCard from './ActivitiesCard'

function UserActivities({user, setUser}) {

    
    let userActivities = user.activities.map(a => {
        return <ActivitiesCard
                  id={a.id}  
                  user={user}
                  key={a.id} 
                  title={a.title}
                  category={a.category}
                  duration={a.duration}
                  description={a.description}
                  likes={a.likes}
                  routine_id={a.routine_id}
                  />
    })

    return(
        <div>
            <h3>Your activities:</h3>
            <p>{userActivities}</p>
        </div>
    )

}

export default UserActivities