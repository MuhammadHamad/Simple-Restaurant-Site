import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Menu from "./menuapi";
import "./style.css";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant;
