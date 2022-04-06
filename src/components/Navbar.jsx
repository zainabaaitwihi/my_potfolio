import React from 'react'
import { NavLink } from 'react-router-dom'
import profile from './../assets/profile.jpg'
import './Navbar.scss'
export default function Navbarr({cliknav}) {
  return (
    <>
    <div className="NavBar"> 
      <nav className="nav">  
      <div className="profile">
          <img src={profile}/>
      </div>
          <ul  className="nav-items">
            <li className="nav-item" onClick={cliknav}>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item" onClick={cliknav}>
              <NavLink to="/About">About</NavLink>
            </li>
            <li className="nav-item" onClick={cliknav}>
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item" onClick={cliknav}>
              <NavLink to="/Blogs">Blogs</NavLink>
            </li>
            <li className="nav-item" onClick={cliknav}>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
      <div className="footer">
          <p>@2022 lorem ipsum</p>
      </div>
      </nav>
      </div> 
      </>
  )
}
