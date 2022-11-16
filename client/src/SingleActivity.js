import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import DisplaySingleActivity from './DisplaySingleActivity'


function SingleActivity({user}){
    

    const params = useParams();
    const activity = user.activities.find(a => a.id == params.id)
    const routine = user.routines.find(r => r.id === activity.routine_id)
    console.log(routine)
    // let routine = user.routines.find(r => r.id == activity.routine_id)
 

    return (
        <div className='single-activity-container'>
            <h4>{user.username}</h4>

                <DisplaySingleActivity
                  id={activity.id}  
                  key={activity.id} 
                  title={activity.title}
                  category={activity.category}
                  duration={activity.duration}
                  description={activity.description}
                  routine={routine}
                  />            
        </div>
        
    )
}

export default SingleActivity