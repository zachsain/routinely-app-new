import React, {useState} from 'react'
import Home from './Home'
import UserActivities from "./UserActivities"

function UserProfile({user}){
    const [username, setUsername] = useState("")
    

    return(
        <div className="profile-container">
            <h3 className='user'>{user.username}</h3>
            <img id="user-image" style={{ width: "12%", height: "10%" }} src={user.image_url} alt="user image"/>
            <p>bio:{user.bio}</p>
            <p>contact: {user.email}</p>

            <div className="user-activity-container">
                <UserActivities user={user}/>
            </div>
        </div>

    )
}

export default UserProfile 