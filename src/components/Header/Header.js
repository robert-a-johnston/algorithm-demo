import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import './Header.css'


const Header = () => (
  <div className="header">
    <Navbar>
      <Navbar.Brand>Algorithm Demo</Navbar.Brand>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sort">Sorter</NavLink>
          <NavLink to="/path">Pathfinder</NavLink>
        </Nav>
    </Navbar>
  </div>
)

export default Header
