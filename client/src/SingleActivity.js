import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import DisplaySingleActivity from './DisplaySingleActivity'
import SingleActivityRoutine from "./SingleActivityRoutine";
import './App.css';


function SingleActivity({user}){

    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams();
    let activity = user.activities.find(a => a.id == params.id)
    let routine = user.routines.find(r => r.id === activity.routine_id)
   
    let activityRoutine = activity.routine
  
    return (
        <div className='single-activity-container'>
                <DisplaySingleActivity
                  id={activity.id}  
                  key={activity.id} 
                  title={activity.title}
                  category={activity.category}
                  duration={activity.duration}
                  description={activity.description}
                  routine={routine}
                  isLoaded={isLoaded}
                  date={activity.date}
                />             
        </div>
        
    )
}

export default SingleActivity