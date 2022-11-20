import React, {useState, useEffect, useCallback} from 'react'
import RoutineForm from './RoutineForm'
import './App.css'
import DisplayRoutines from './DisplayRoutines'
import { useHistory} from 'react-router-dom'

function Routines({user, setUser}){
    const [routines, setRoutines] = useState([])
    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState("")
    const [filterButtonClick, setFilterButtonClick] = useState(false)

    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => setRoutines(allRoutines))
     
    },[])

    function handleNewRoutine(){
        setAddRoutineClick(!addRoutineClick)
    }

    const history = useHistory();
    const handleUserRoutineClick = useCallback(() => history.push('/'));


    let displayRoutines = routines.map(r => {
       return <DisplayRoutines
            routines={routines}
            user={user}
            setUser={setUser}
            key={r.id}
            title={r.title}
            category={r.category}
            instructions={r.instructions}
            duration={r.duration}
            activities={r.activities}
            id={r.id}
             />
    }) 

    function handleSearch(e){
        setCategoryFilter(e.target.value)
    }

    function handleFilterClick(e){
        setFilterButtonClick(!filterButtonClick)
    }

    function handleSubmit(e){
       console.log(e.target.value)
       let filtered = routines.filter(r => {
           return r.category === e.target.value
        })

        setRoutines(filtered)
    }
    return(
        <div>
        {routines.length > 0 ? (
            <div>
        <button onClick={handleFilterClick}>Filter By Category</button>
        {filterButtonClick ? ( 
        <div> 
        {/* <form onSubmit={handleSubmit}> */}
        <label className='routine-form'>Select Category:
        <select value={categoryFilter} onChange={handleSubmit}>
            <option value={null}></option>
            <option value="Weight Training">Weight Training</option>
            <option value="Cardio">Cardio</option>
            <option value="Sports Training">Sports Training</option>
            <option value="Diet">Diet</option>
            <option value="Education">Education</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Organization">Organization</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Beauty">Beauty</option>               
            <option value="Health & Wellness">Health & Wellness</option>
            <option value="Music">Music</option>
            <option value="Arts & Crafts">Arts & Crafts</option>
            <option value="Yoga">Yoga</option>
            <option value="Meditation">Meditation</option>
         </select>    
         </label>  
         {/* </form>   */}
        </div>
        ) : (
            null
        )}
            <button id="add-new-routine" onClick={handleNewRoutine}>
                {addRoutineClick ? ("Show Routines") : ("Add New Routine")}
            </button>
            <button id="my-routines-button" onClick={handleUserRoutineClick}>
                My Routines:
            </button>

             {addRoutineClick ?
             (<h3>Add Routine:</h3>) : (<h3>Routines:</h3>)
             }
             {addRoutineClick ? 
             (<div className="routine-form"><RoutineForm setAddRoutineClick={setAddRoutineClick} addRoutineClick={addRoutineClick} routines={routines} setRoutines={setRoutines}/> </div> )
              : (<div className="user-activity-container">
                {displayRoutines} 
             </div>)}
            </div>) : 
            (<div className="routine-form">
                <h3>Create A New Routine:</h3>
                <RoutineForm 
                 setAddRoutineClick={setAddRoutineClick} 
                 addRoutineClick={addRoutineClick} 
                 routines={routines} 
                 setRoutines={setRoutines}/> 
            </div>)
        }
        
          </div>




// old code:
        // <div>
        //    <button id="add-new-routine" onClick={handleNewRoutine}>{addRoutineClick ? ("Show Routines") : ("Add New Routine")}</button>
        //    <button id="my-routines-button" onClick={handleUserRoutineClick}>My Routines</button>
        //     {addRoutineClick ?
        //     (<h3>Add Routine:</h3>) : (<h3>Routines:</h3>)
        //     }
        //     {addRoutineClick ? 
        //     (<div className="routine-form"><RoutineForm setAddRoutineClick={setAddRoutineClick} addRoutineClick={addRoutineClick} routines={routines} setRoutines={setRoutines}/> </div> )
        //      : (<div className="user-activity-container">
        //        {displayRoutines} 
        //     </div>)}
        // </div>
    )
   
}

export default Routines


{/* <div>
<button id="add-new-routine" onClick={handleNewRoutine}>{addRoutineClick ? ("Show Routines") : ("Add New Routine")}</button>
<button id="my-routines-button" onClick={handleUserRoutineClick}>My Routines</button>
 {addRoutineClick ?
 (<h3>Add Routine:</h3>) : (<h3>Routines:</h3>)
 }
 {addRoutineClick ? 
 (<div className="routine-form"><RoutineForm setAddRoutineClick={setAddRoutineClick} addRoutineClick={addRoutineClick} routines={routines} setRoutines={setRoutines}/> </div> )
  : (<div className="user-activity-container">
    {displayRoutines} 
 </div>)}
</div> */}