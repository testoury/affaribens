import React, { useState } from 'react'
import "./navbarStyle.css"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"
export default function NavBar() {

  const [navclick , setNavlist]=useState (false) ;
  const handleclick =() => setNavlist(!navclick)
  const [color , setColor]= useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" :"header"}>
        <Link to="/">
            <h1>Affari Bens.</h1>
        </Link>
        <ul className={navclick ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li><li>
            <Link to="/project">Projects</Link>
          </li><li>
            <Link to="/about">About</Link>
          </li><li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleclick}>
          {navclick ? (<FaTimes size={20}  style={{color : "#fff"}}/>) : (<FaBars size={20}  style={{color : "#fff"}}/>)}
        </div>
    </div>
  )
}
