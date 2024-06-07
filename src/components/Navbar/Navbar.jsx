import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const[components,setComponents] = useState("home")
  return (
    <div className= 'navbar'>
      <img src={assets.logo} alt="" className="logo" /> 
      <ul className="navbar-components">
        <li onMouseEnter={()=>setComponents("home")} className={components=="home"?"active":""} > <Link to="/"> Home</Link></li>
        <li onMouseEnter={()=>setComponents("menu") }className={components=="menu"?"active":""} ><Link to="/menu"> Menu</Link></li>
        <li onMouseEnter={()=>setComponents("about")} className={components=="about"?"active":""} ><Link to="/about"> About</Link></li>
        <li onMouseEnter={()=>setComponents("contact")} className={components=="contact"?"active":""} ><Link to="/contact"> Contact</Link></li>
        <li onMouseEnter={()=>setComponents("feedback") }className={components=="feedback"?"active":""} >Feedback</li>
      </ul>
      <div className="navbar-right ">
       <button type='button' className='button'>Login </button>
      </div>



    </div>
    
  )
}

export default Navbar
