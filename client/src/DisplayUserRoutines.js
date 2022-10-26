import React, {useState} from "react";
import UserRoutineCard from "./UserRoutineCard";  

function DisplayUserRoutines({user, setUser}){

    let user_routines = user.user_routines.map((r) => {
        return <UserRoutineCard 
                    key={r.id}
                    title={r.title}
                    category={r.category}
                    duration={r.duration}
                    instructions={r.instructions}
                    user={user}
                    setUser={setUser}
                 />
    })

    console.log(user.user_routines)

    return(
        <div className="user-routine-container">
           <div>{user_routines}</div>
        </div>
    )
}

export default DisplayUserRoutines