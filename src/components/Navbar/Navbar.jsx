import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const handleLogoClick = () => {
    setActiveComponent("home");
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='navbar'>
      <Link to="/" onClick={handleLogoClick}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-components">
        <li onClick={() => handleComponentClick("home")} className={activeComponent === "home" ? "active" : ""}>
          <Link to="/"> Home</Link>
        </li>
        <li onClick={() => handleComponentClick("menu")} className={activeComponent === "menu" ? "active" : ""}>
          <Link to="/menu"> Menu</Link>
        </li>
        <li onClick={() => handleComponentClick("about")} className={activeComponent === "about" ? "active" : ""}>
          <Link to="/about"> About</Link>
        </li>
        <li onClick={() => handleComponentClick("contact")} className={activeComponent === "contact" ? "active" : ""}>
          <Link to="/contact"> Contact</Link>
        </li>
        <li onClick={() => handleComponentClick("feedback")} className={activeComponent === "feedback" ? "active" : ""}>
          <Link to="/feedback"> Feedback</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <button type='button' className='button'>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
