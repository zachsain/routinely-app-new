import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import DisplaySingleActivity from './DisplaySingleActivity'


function SingleActivity({user}){
  const [routines, setRoutines] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [state, setState] = useState(null)


  useEffect(() => {
    setState(user)
    // fetch('/routines')
    // .then(r => r.json())
    // .then((allRoutines) => (setRoutines(allRoutines), setIsLoaded(true)))
 
}, [])

    const params = useParams();
    let activity = user.activities.find(a => a.id == params.id)
    let routine =  user.routines.find(r => r.id === activity.routine_id)
    // let routine;
    // if(isLoaded === true){
    //   routine = routines.find(r => r.id === activity.routine_id)
    // }
    console.log(routine)
    console.log(activity)
    // let routine = user.routines.find(r => r.id == activity.routine_id)
 
    return (
        <div className='single-activity-container'>
            <h4>{user.username}</h4>
            {/* {isLoaded ? 
            ( <DisplaySingleActivity
              id={activity.id}  
              key={activity.id} 
              title={activity.title}
              category={activity.category}
              duration={activity.duration}
              description={activity.description}
              routine={routine}
              isLoaded={isLoaded}
              /> ) : (null)} */}
                <DisplaySingleActivity
                  id={activity.id}  
                  key={activity.id} 
                  title={activity.title}
                  category={activity.category}
                  duration={activity.duration}
                  description={activity.description}
                  routine={routine}
                  isLoaded={isLoaded}
                />             
        </div>
        
    )
}

export default SingleActivity