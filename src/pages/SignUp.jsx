import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"

const SignUp = () => {


  
    return (
      
        
        <Form className='mx-auto w-50 border p-3' 
        //onSubmit={handleSubmit}
        >
        <Form.Group className="mb-3" >
            <Form.Label htmlFor="exampleInputEmail1" className="form-label">Email</Form.Label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'
                // onChange={handleChange}
                //value={email}
                />
    <Form.Text className="text">
      {/* {message} */}
      
    </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
    <Form.Label  htmlFor="exampleInputPassword1">Password</Form.Label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'
                //onChange={handleChange}
                //value={password} 
                />
  </Form.Group>
  
  <Button className="mb-3 " variant="primary" type="submit" >
    Sign In
  </Button >

        </Form>
        
    )
  }
  
  export default SignUp;