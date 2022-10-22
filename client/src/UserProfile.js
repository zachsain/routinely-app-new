import React, {useState} from 'react'
import Home from './Home'

function UserProfile({user}){
    const [username, setUsername] = useState("")
    

    return(
        <div>
        <img id="user-image" style={{ width: "12%", height: "10%" }} src={user.image_url} alt="user image"/>
        <h3 className='user'>{user.username}</h3>
        <p>{user.bio}</p>
        <p>contact: {user.email}</p>
        </div>
    )
}

export default UserProfile 