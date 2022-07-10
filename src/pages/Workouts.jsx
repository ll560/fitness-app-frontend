import { Button } from 'bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import workoutPic from '../assets/workout1.jpeg';
import deadlift from '../assets/deadlift.jpeg';
import lunges from '../assets/lunges.jpeg';
import pushUp from '../assets/pushUp.jpeg'
import run from '../assets/run.jpeg'


const Workouts = () => {
  
  return (
    <Container>
        <Row>
    <Card style ={{width: '18rem'}}>
      <Card.Img variant='top' src={workoutPic} />
      <Card.Body>
        <Card.Title>workout</Card.Title>
        <Card.Text>
          
        <li>Plank Walkouts</li>
            <li>Side Planks</li>
            <li>Dumbbell Lateral Raise</li>
            <li>Kneeling Dumbbell Zottman Curl</li>
            <li>Plank Walkouts</li>
          
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style ={{width: '18rem'}}>
      <Card.Img variant='top' src={deadlift} />
      <Card.Body>
        <Card.Title>workout</Card.Title>
      </Card.Body>
    </Card>

    <Card style ={{width: '18rem'}}>
      <Card.Img variant='top' src={run} />
      <Card.Body>
        <Card.Title>workout</Card.Title>
      </Card.Body>
    </Card>

    <Card style ={{width: '18rem'}}>
      <Card.Img variant='top' src={lunges} />
      <Card.Body>
        <Card.Title>workout</Card.Title>
      </Card.Body>
    </Card>

    <Card style ={{width: '18rem'}}>
      <Card.Img variant='top' src={pushUp} />
      <Card.Body>
        <Card.Title>workout</Card.Title>
      </Card.Body>
    </Card>
    </Row>
    </Container>
  )
}

export default Workouts