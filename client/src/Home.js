import React, {userState} from 'react'
import UserProfile from './UserProfile'

function Home({user}){
    return(
        <div>
            <UserProfile user={user} />
        </div>

   
      
    )

}

export default Home