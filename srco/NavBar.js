import React from 'react'
import logo from '../assets/logo.png';
import  '../styles/NavBar.css'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
     
        <Link to ="/"> <img src={logo} alt ="not found" /></Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Campuses </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Campuses </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        
      </div>
    </div>
  )
}
