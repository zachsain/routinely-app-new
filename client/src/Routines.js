import React, {useState, useEffect, useCallback} from 'react'
import RoutineForm from './RoutineForm'
import DisplayRoutines from './DisplayRoutines'
import { useHistory} from 'react-router-dom'
import './App.css';

function Routines({user, setUser}){
    const [routines, setRoutines] = useState([])
    const [addRoutineClick, setAddRoutineClick] = useState(false)
    const [categoryFilter, setCategoryFilter] = useState("")
    const [filterButtonClick, setFilterButtonClick] = useState(false)
    const [allRoutinesCopy, setAllRoutinesCopy] = useState([])
    

    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => (setRoutines(allRoutines), setAllRoutinesCopy(allRoutines)))
     
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

    function handleClick(){
        setRoutines(allRoutinesCopy)
    }

    function handleFilterSelect(e){
        setFilterButtonClick(!filterButtonClick)
        let filtered = routines.filter(r => {
            return r.category === e.target.value
         })
         setRoutines(filtered)
     }

    // function handleFilterClick(e){
    //     setFilterButtonClick(!filterButtonClick)
    //     setRoutines(allRoutinesCopy)
    // }

    // function handleSubmit(e){
    //    setFilterButtonClick(!filterButtonClick)
    //    let filtered = routines.filter(r => {
    //        return r.category === e.target.value
    //     })
    //     setRoutines(filtered)
    // }
    return(
        <div className='routine-page'>
           <h1 className="actvty-page-header">Routine Library:</h1>
           <div className="create-btn-div"> 
            <button className="btn" id="add-new-routine" onClick={handleNewRoutine}>Create Routine</button>
           </div>
           {addRoutineClick ? 
            (<div>
                <RoutineForm 
                    setAddRoutineClick={setAddRoutineClick} 
                    addRoutineClick={addRoutineClick} 
                    routines={routines} 
                    setRoutines={setRoutines}
                /> 
                <div className="my-routines-btn-div"> 
            <button className="btn" id="my-routines-btn" onClick={handleUserRoutineClick}>My Routines</button>
            </div>
                <label id="routine-filter" className='routine-form'>Filter By Category:
                <select className="routine-filter-selector" onClick={handleClick} onChange={handleFilterSelect}>
                    <option value=""></option>
                    <option className="routine-option" value="Weight Training">Weight Training</option>
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
                {displayRoutines}
            </div> )
             : (<div>
                <div className="my-routines-btn-div"> 
            <button className="btn" id="my-routines-btn" onClick={handleUserRoutineClick}>My Routines</button>
            </div>
                 {/* className='routine-form' */}
                <label id="routine-filter">Filter:
                <select className="routine-filter-selector" onClick={handleClick} onChange={handleFilterSelect}>
                    <option value=""></option>
                    <option className="routine-option" value="Weight Training">Weight Training</option>
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
               {displayRoutines} 
            </div>)}    
            {/* <div className="my-routines-btn-div"> 
            <button className="btn" id="my-routines-btn" onClick={handleUserRoutineClick}>My Routines</button>
            </div>
                <label id="routine-filter" className='routine-form'>Filter By Category:
                <select className="routine-filter-selector" onClick={handleClick} onChange={handleFilterSelect}>
                    <option value=""></option>
                    <option className="routine-option" value="Weight Training">Weight Training</option>
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
                </label>  */}
            {/* {addRoutineClick ? 
            (<div className="routine-form">
                <RoutineForm 
                    setAddRoutineClick={setAddRoutineClick} 
                    addRoutineClick={addRoutineClick} 
                    routines={routines} 
                    setRoutines={setRoutines}
                /> 
                {displayRoutines} 
            </div> )
             : (<div>
               {displayRoutines} 
            </div>)} */}
        </div>
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