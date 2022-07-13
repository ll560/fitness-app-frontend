import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import * as workoutService from '../../utilities/data'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const UpdateWorkout = () => {

   
    const [workoutDetails, setWorkoutDetails] = useState({
        exercise:'',
        exerciseimage:'',
        exercisecomment:''
    })

    const location = useLocation()
    const navigate = useNavigate()
    
    const handleChange = e => {
        setWorkoutDetails({
            ...workoutDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(workoutDetails)
        workoutService.createWorkout(workoutDetails)
        navigate('/workouts')
    }
    console.log(workoutDetails)
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Exercise</Form.Label>
          <Form.Control onChange={handleChange} type="text" name="exercise" placeholder="Enter exercise" value={workoutDetails.exercise}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridexerciseimage">
          <Form.Label>Exercise Img</Form.Label>
          <Form.Control type="text" placeholder="exercise image" 
          onChange={handleChange}  
          name="exerciseimage" 
          value={workoutDetails.exerciseimage}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridExercisecomment">
        <Form.Label>Exercise comment</Form.Label>
        <Form.Control placeholder="Leave a comment" 
         onChange={handleChange}  
         name="exercisecomment" 
         value={workoutDetails.exercisecomment}/>
      </Form.Group>



        

      <Button variant="primary" type="submit">
        Update Workout
      </Button>
    </Form>

  )
}

export default UpdateWorkout