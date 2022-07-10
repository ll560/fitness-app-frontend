import React from 'react'


import { Navbar, Nav, Container } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className=" bg-light footer-copyright text-center py-3">
        <Container fluid>
        &copy; {new Date().getFullYear()} Copyright: <Nav.Link href="https://www.mdbootstrap.com"> MDBootstrap.com </Nav.Link>
        </Container>
    </div>
  )
}

export default Footer