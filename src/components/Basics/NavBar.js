import React from 'react'

const NavBar = ({filterItem, menuList}) => {
  return (
    <>
    
    <nav className="navbar">
            <div className="btn-group">
                {menuList.map((currEle, index) => {
                    return (
                        <button key = {index} className="btn-group__item" onClick={() => filterItem(currEle)}>
                            {currEle}
                        </button>
                    );
                })}
            </div>
        </nav>
    </>
  )
}

export default NavBar