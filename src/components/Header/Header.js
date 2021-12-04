import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'


const Header = () => (
  <div className="header">
    <Navbar>
      <Navbar.Brand><h1>Algorithm Fun</h1></Navbar.Brand>
        <Nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/sort">Sorter</NavLink>
          <NavLink className="nav-link" to="/path">PathFinder
            {/* <span className="span-link" onClick= {
              e=> { e.stopPropagation()}
            }>PathFinder</span> */}
          </NavLink>
        </Nav>     
    </Navbar>
  </div>
)

export default Header
