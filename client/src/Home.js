import React, {userState} from 'react'
import UserProfile from './UserProfile'

function Home({user}){
    return(
        <div>
            <h3>Welcome to home page</h3>
            <p>here you can track and manage your activites</p>
            <p>you can also create a new activity</p>
            <UserProfile user={user} />
        </div>

   
      
    )

}

export default Home