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
    
    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => setRoutines(allRoutines))
         
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


    return(
        <div className="user-routine-container">
           <div>{user_routines}</div>
        </div>
    )
}

export default DisplayUserRoutines