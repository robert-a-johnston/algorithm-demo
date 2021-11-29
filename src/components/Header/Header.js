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
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/sort">Sorter</NavLink>
          <NavLink className="nav-link" to="/path">Pathfinder</NavLink>
        </Nav>
    </Navbar>
  </div>
)

export default Header
