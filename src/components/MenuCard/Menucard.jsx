import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const MenuCard = ({ menuData }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  const showMoreItems = () => {
    setVisibleItems(menuData.length);
  };

  return (
    <>
      <section className="main-card--container">
        {menuData.slice(0, visibleItems).map((curEle) => {
          const { id, name, category, image, description, price } = curEle;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <img src={image} alt={name} className="card-media" />
                <div className="card-body">
                <h2 className="card-price">Rs {price}</h2>
                  <h2 className="card-title">{name}</h2>
                  
                  {/* <span className="c">${price}</span> */}
                  <span className="card-author subtle">{category}</span>
                  <p className="card-description subtle">{description}</p>
                  
                  <button className='homepage-button'> Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {visibleItems < menuData.length && (
        <div className="explore-more-container">
          <button className="explore-more-button" onClick={showMoreItems} >
            Explore More 
            <IoIosArrowDown />

          </button>
        </div>
      )}
    </>
  );
};

export default MenuCard;
