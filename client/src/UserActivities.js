import React, {useState} from 'react'

function UserActivities({user}) {

    return(
        <div>
            activities here
            <li>{user.activities}</li>
        </div>
    )

}

export default UserActivities