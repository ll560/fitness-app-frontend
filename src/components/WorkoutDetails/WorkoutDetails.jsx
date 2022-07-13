import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const WorkoutDetails = () => {
    const location = useLocation()
    console.log(location.state)

    const navigate = useNavigate()

    const workoutDetails = location.state
  return (
    <div>
        <p>Exercise: {workoutDetails.exercise}</p>
        <img src={workoutDetails.exerciseimage}></img>
        <p>Comments: {workoutDetails.exercisecomment}</p>
        <button className='btn btn-primary' onClick={() => navigate(`/workouts/${workoutDetails._id}/edit`, {state: workoutDetails})} >Edit</button>
    
    </div>
  )
}

export default WorkoutDetails