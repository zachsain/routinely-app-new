import React, {useState} from 'react'

function UserActivities({user}) {

    
    let userActivities = user.activities.map(a => {
        return <ActivitiesCard
                  key={a.id} 
                  category={a.category}
                  duration={a.duration}
                  description={a.description}
                  likes={a.likes}
                  routine_id={a.routine_id}

                  />
    })

    return(
        <div>
            activities here
            <p>{user.activities}</p>
        </div>
    )

}

export default UserActivities