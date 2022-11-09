import React, {useState, useEffect} from 'react'
import RoutineForm from './RoutineForm'
import DisplayRoutines from './DisplayRoutines'

function Routines({user, setUser}){
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        fetch('/routines')
        .then(r => r.json())
        .then(allRoutines => (setRoutines(allRoutines), console.log(allRoutines)))
     
    }, [])


    let displayRoutines = routines.map(r => {
       return <DisplayRoutines
            key={r.id}
            title={r.title}
            category={r.category}
            instruction={r.instructions}
            duration={r.duration}
            activities={r.activities}
            id={r.id}
             />
    })

    return(
        <div>
            <h1>Routines Page</h1>
        </div>
    

    )
   
}

export default Routines