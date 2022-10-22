import React, {useState} from 'react'
import Home from './Home'

function UserProfile({user}){
    const [username, setUsername] = useState("")
    

    return(
        <div className="profile-container">
            <h3 className='user'>{user.username}</h3>
            <img id="user-image" style={{ width: "12%", height: "10%" }} src={user.image_url} alt="user image"/>
            <p>bio:{user.bio}</p>
            <p>contact: {user.email}</p>
        </div>, 
        <div className="user-profile-activites">

        </div>
    )
}

export default UserProfile 