import React from 'react'
import './Menunav.css'

const Menunav = ({filterItem, menuList}) => {
  return (
    <>
        <nav className='menu-nav'>
            <div className='btn-group'>
            {
                menuList.map((curEle) => {
                    return(
                        <button className='btn-group__item' 
                            onClick= {() => filterItem(curEle)}>
                            {curEle}
                        </button>
                    )
                })}   
            </div>
        </nav>
    </>
  )
}


export default Menunav
