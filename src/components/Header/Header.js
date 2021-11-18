import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './Header.css'


const Header = () => (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Algorithm Demo</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
  </Container>
</Navbar>
)

export default Header
