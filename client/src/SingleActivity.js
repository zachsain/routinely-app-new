import React, {useState} from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';


function SingleActivity(){
    
    const params = useParams();
    console.log(params.id)

    return (
        <div>
        HELLO
        </div>
        
    )
}

export default SingleActivity