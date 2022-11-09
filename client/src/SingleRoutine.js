import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'


function SingleRoutine(){
    const [routine, setRoutine] = useState([])

    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        fetch(`${id}`)
        .then(r => r.json())
        .then(routine => (setRoutine(routine), console.log(routine)))
     
    }, [])
    

    return (
        <div>hello world</div>
    )
}

export default SingleRoutine