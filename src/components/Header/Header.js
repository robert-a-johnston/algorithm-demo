import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => (
  <Navbar bg="light" expand="lg">
  <Container id="container">
    <Navbar.Brand>Algorithm Demo</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sort">Sorter</NavLink>
      </Nav>
  </Container>
</Navbar>
)

export default Header
