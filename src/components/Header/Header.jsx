import React from 'react'
import { Link } from 'react-router-dom'
//import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Container } from 'react-bootstrap'
import styled from 'styled-components'


const Header = ({user, setUser, logOut }) => {
  console.log('user', user)



  const handleLogOut = () => {
    setUser(null)
    logOut()
  }
  return (
    <Navbar expand="lg" className='color-nav mb-5' >
      <Container className='d-flex'>
        <Navbar.Brand href="/" className="brand">Coach</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        {/* <ul className="nav_menu"> */}
          {/* <li className="nav_item"> */}

          {
            user 
            ? 
            <>
            <Nav className='text'>Welcome &nbsp;</Nav>  &nbsp;
            {/* <form className='d-flex' role="search">
              <input className='form-control me-2' type='search' placeholder='search' aria-label="search"/>
              <button className='btn btn-outline-success' type="submit">Search</button>
              </form> */}
              <Nav.Link href="/workouts" className="nav_link">Workouts</Nav.Link>
              
              <Nav.Link href="/" onClick={handleLogOut}>Log Out </Nav.Link>
               </>
            :
            <>
            {/* render login and signup if no user */}
            <Nav.Link href="/login" className="nav_link">Login</Nav.Link>
          
            <Nav.Link href="/signup" className="nav_link">Sign Up</Nav.Link>
          
          <Nav.Link href="/" className="nav_link">About</Nav.Link>
          </>

}
        {/* </ul> */}
        <div className="nav_toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      
</Nav>
</Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header