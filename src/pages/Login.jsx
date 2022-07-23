import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { login } from '../utilities/users-service'



const Login = ({ setUser }) => {

  const [message, setMessage] = useState("We'll never share your email with anyone else.")
  const [credentials, setCredentials] = useState({
    email:'',
    password:'',
    
})

const navigate = useNavigate()


const handleChange = e =>{
  setCredentials({...credentials, [e.target.name]: e.target.value })
  
}

//on click
const handleClick =  e => {
  e.preventDefault()
  navigate('/signUp')
}

//sumbit

const handleSubmit = async e => {
   e.preventDefault()
  try{
    const user = await login(credentials)
    if(user) {
      setUser(user)
      navigate('/workouts')
    } else { 
      throw new Error()
    }
     
  }catch(e){
      setMessage('Log in failed -Try again')
  }
}


  return (
    
    <Form className='mx-auto w-50 border p-3' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label htmlFor="exampleInputEmail1" className="form-label">Email</Form.Label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'
                onChange={handleChange}
                value={credentials.email}/>
    <Form.Text className="text">{message}
      
    </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
    <Form.Label  htmlFor="exampleInputPassword1">Password</Form.Label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'
                onChange={handleChange}
                value={credentials.password} />
  </Form.Group>
  
  <Button className="mb-3 " variant="primary" type="submit" >
    Sign In
  </Button >

  <Button className="mb-3 mx-4" variant="secondary" type="submit" onClick={handleClick}>
     Create New Account 
  </Button>

    </Form>
    
  )
}

export default Login