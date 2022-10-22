import React, {useState} from 'react'

function UserActivities({user}) {

    
    let userActivities = user.activities.map(a => {
        return <CategoryCard
                  key={a.id} 
                  category={c}
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