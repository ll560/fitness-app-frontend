import { Button } from 'bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import workoutPic from '../assets/workout1.jpeg';
import deadlift from '../assets/deadlift.jpeg';
import lunges from '../assets/lunges.jpeg';
import pushUp from '../assets/pushUp.jpeg';
import run from '../assets/run.jpeg';
import triceps from '../assets/triceps.jpeg';
import { useState, useEffect } from 'react';
import {getWorkouts} from '../utilities/data'

const Workouts = () => {
  const [workouts, setWorkouts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      console.log('this is working')
      const workoutsRes = await getWorkouts()
      setWorkouts(workoutsRes.data)

      })()
      
      console.log('workouts----------------', workouts)
  }, [])
    
  return (
    <div >
    <Link to="/workouts/createWorkout" type="button" className="btn btn-primary mb-4" >
      Add Workout</Link>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {
        workouts.map( workout => 
          <Card onClick={() => navigate(`/workouts/${workout._id}`, {state: workout})} 
          key={workout._id} style ={{width: '18rem', margin: '6px'}}>
          <Card.Img variant='top' src={workout.exerciseimage} className="rounded my-2"/>
          <Card.Body>
            <Card.Title>{workout.exercise}</Card.Title>
          </Card.Body>
        </Card>
        )
        }
        </div>  
    </div>

);
}

export default Workouts;