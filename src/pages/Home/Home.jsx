import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="browse-menu">
        <div className="browsemenu-heading">
          <h1>Browse Our Menu</h1>
        </div>
        <div className="menu-container">
          <div className="menu-box">
            <img src={assets.breakfastlogo} alt="" className="menu-image" /> 
               <div className="menu-details">
                 <h3>Breakfast</h3>
                 <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                 <a href="#" class="explore-menu">Explore Menu</a>
               </div>
          </div>
          <div className="menu-box">
            <img src={assets.drinkslogo} alt="" className="menu-image" /> 
               <div className="menu-details">
                 <h3>Beverages</h3>
                 <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                 <a href="#" class="explore-menu">Explore Menu</a>
               </div>
          </div>
          <div className="menu-box">
            <img src={assets.maindisheslogo} alt="" className="menu-image" /> 
               <div className="menu-details">
                 <h3>Main Course</h3>
                 <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                 <a href="#" class="explore-menu">Explore Menu</a>
               </div>
          </div>
          <div className="menu-box">
            <img src={assets.snackslogo} alt="" className="menu-image" /> 
               <div className="menu-details">
                 <h3>Snacks</h3>
                 <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                 <a href="#" class="explore-menu">Explore Menu</a>
               </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home
