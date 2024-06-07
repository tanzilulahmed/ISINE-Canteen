import React from 'react'

const menuNav = ({filterItem, menuList}) => {
  return (
    <>
        <nav className='navbar'>
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

export default menuNav