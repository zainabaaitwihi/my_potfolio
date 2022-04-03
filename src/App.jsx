import React, { useState } from 'react'
import './App.scss'
import Navbarr from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blogs from './components/BlogsPage'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import {Routes, Route } from "react-router-dom";
export default function App() {
  const[navtoggle,setNavtoggle]=useState(false);

  const cliknav = () =>{
   setNavtoggle(!navtoggle);
  }
  return (
    <div className="App"> 
      <div className={`sidebar ${ navtoggle ? "nav-toggle": ""}`}>
        <Navbarr/>
      </div>
      <div className="nav-btn" onClick={cliknav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
      <div className="main-content">
        <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Portfolio" element={<Portfolio />} />
        </Routes>
        </div>
      </div>
    </div>
  )
}

