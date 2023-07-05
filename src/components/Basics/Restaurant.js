import React, { useState } from 'react';
import MenuCard from './MenuCard';
import Menu from './MenuApi';
import "./style.css";
import NavBar from './NavBar';

const uniqueList = [
...new Set(
    Menu.map((currEle) => {
        return currEle.category
    })
    ),
    "All",
];
// console.log(Menu);
// console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if(category === "All") {                     
            setMenuData(Menu)
            return;
        }
        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category
        });
        setMenuData(updatedList);
    };

    return (
        <>
        <NavBar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant