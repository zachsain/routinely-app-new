import React, {useState} from 'react'
import Home from './Home'

function UserProfile({user}){
    const [username, setUsername] = useState("")
    

    return(
        <div>
         <h3 className='user'>{user.username}</h3>
        <img id="user-image" style={{ width: "12%", height: "10%" }} src={user.image_url} alt="user image"/>
        <p>{user.bio}</p>
        <p>contact: {user.email}</p>
        </div>
    )
}

export default UserProfile 