import React, { useState } from 'react'
import "./Menu.css";
import MenuApi from '../../components/MenuApi/MenuApi';
import MenuCard from '../../components/MenuCard/Menucard';
import Menunav from '../../components/MenuNav/Menunav';

const uniqueList = [
    ...new Set(
      MenuApi.map((curEle) => {
        return curEle.category;
    })
    ),
    "All"
];

const Restraunt = () => {
    const[menuData, setMenuData] = useState(MenuApi);
    const[menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {

        if(category==="All"){
            setMenuData(MenuApi);
            return;
        }

        const updatedList = MenuApi.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };
    return (
        <>
        <div className="menu-header">
                <h1>Our Menu</h1>
                <p>We know everyone has different cravings, so our menu offers a<br></br> variety of dishes to satisfy every taste bud.</p>
            </div>
            <Menunav filterItem = {filterItem} menuList = {menuList}/>
           <MenuCard menuData = {menuData}/>
        </>
        
  )
}

export default Restraunt