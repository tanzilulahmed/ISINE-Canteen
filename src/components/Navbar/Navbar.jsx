import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const[components,setComponents] = useState("home")
  return (
    <div className= 'navbar'>
      <img src={assets.logo} alt="" className="logo" /> 
      <ul className="navbar-components">
        <li onMouseEnter={()=>setComponents("home")} className={components=="home"?"active":""} >Home</li>
        <li onMouseEnter={()=>setComponents("menu") }className={components=="menu"?"active":""} >Menu</li>
        <li onMouseEnter={()=>setComponents("about")} className={components=="about"?"active":""} >About</li>
        <li onMouseEnter={()=>setComponents("contact")} className={components=="contact"?"active":""} >Contact</li>
        <li onMouseEnter={()=>setComponents("feedback") }className={components=="feedback"?"active":""} >Feedback</li>
      </ul>
      <div className="navbar-right ">
       <button type='button' className='button'>Login </button>
      </div>



    </div>
    
  )
}

export default Navbar
