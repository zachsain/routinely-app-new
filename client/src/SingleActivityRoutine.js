import React from "react";

function SingleActivityRoutine({
    title, 
    category, 
    instructions,
    duration,
    id
}){
    return (
        <div className="routine-container">
        <h3>Routine: {title}</h3>
        <p>Category: {category}</p>
        <p>Duration: {duration}</p>
        <p>Instructions: {instructions}</p>
        </div>
    )

}

export default SingleActivityRoutine