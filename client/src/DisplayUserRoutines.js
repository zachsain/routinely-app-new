import React, {useState, useEffect} from "react";
import UserRoutineCard from "./UserRoutineCard";  

function DisplayUserRoutines({
    selectRoutineClick, 
    setSelectRoutineClick,
    setRoutineTitle,
    showInputForRoutine,
    setShowInputForRoutine,
    routineId,
    setRoutineId,
    setCategory

    }){

    const [routines, setRoutines] = useState([])
    const [filterButtonClick, setFilterButtonClick] = useState(false)
    const [allRoutinesCopy, setAllRoutinesCopy] = useState([])
    
    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => (setRoutines(allRoutines), setAllRoutinesCopy(allRoutines)))
         
     }, [])

    
    let user_routines = routines.map((r) => {
        return <UserRoutineCard 
                    key={r.id}
                    id={r.id}
                    title={r.title}
                    category={r.category}
                    duration={r.duration}
                    instructions={r.instructions}
                    selectRoutineClick={selectRoutineClick}
                    setSelectRoutineClick={setSelectRoutineClick}
                    setRoutineTitle={setRoutineTitle}
                    showInputForRoutine={showInputForRoutine}
                    setShowInputForRoutine={setShowInputForRoutine}
                    setRoutineId={setRoutineId}
                    setCategory={setCategory}
                 />
    })

    function handleFilterClick(){
        // setFilterButtonClick(!filterButtonClick)
        // setRoutines(allRoutinesCopy)
    }

    function handleClick(){
        setRoutines(allRoutinesCopy)
    }

    function handleFilterSelect(e){
        // setRoutines(allRoutinesCopy)
        setFilterButtonClick(!filterButtonClick)
        let filtered = routines.filter(r => {
            return r.category === e.target.value
         })
         setRoutines(filtered)
     }

    return(
        <div>
        <div> 
                {/* <button onClick={handleFilterClick}>Filter By Category</button> */}
                <label className='routine-form'>Filter By Category:
                <select onClick={handleClick} onChange={handleFilterSelect}>
                    <option value=""></option>
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
                </div>
           {/* {filterButtonClick ? ( 
                <div> 
                <label className='routine-form'>Select Category:
                <select onClick={handleFilterSelect}>
                    <option value=""></option>
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
                </div>
                ) : (
                    null
             )} */}
        <div className="user-routine-container">
           <div>{user_routines}</div>
        </div>
        </div>
    )
}

export default DisplayUserRoutines