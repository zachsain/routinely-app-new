import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import ActivitiesCard from './ActivitiesCard'


function SingleActivity({user}){
    

    const params = useParams();
    console.log(params.id)
    const activity = user.activities.find(a => a.id == params.id)
    // let routine = user.routines.find(r => r.id == activity.routine_id)
 

    return (
        <div className='single-activity-container'>
            <h4>{user.username}</h4>

                <ActivitiesCard
                  id={activity.id}  
                  key={activity.id} 
                  title={activity.title}
                  category={activity.category}
                  duration={activity.duration}
                  description={activity.description}
                //   user={user}
                  />            
        </div>
        
    )
}

export default SingleActivity