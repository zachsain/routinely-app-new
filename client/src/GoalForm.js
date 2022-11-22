import React, {useState, useEffect} from "react";
import './App.css';

function GoalForm({user, setUser}){
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const [userId, setUserId] = useState(user.id)
    const [routines, setRoutines] = useState([])

    function handleSubmit(e){
        e.preventDefault()
    }
    
  console.log(routines.category)

  return(
        <div>
         <form onSubmit={handleSubmit}>
        <label className='routine-form'>Select Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
        <br/>
        <label>
            Select Weekly Activity Goal Amount:
            <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>

            </select>
        </label>
        <br/>
        <button>Create Goal</button>
        
        </form>
       

        </div>
    )
}

export default GoalForm