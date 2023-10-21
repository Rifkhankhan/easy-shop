import React from "react";
import ShopItem from "./ShopItem";
import './ShopList.css'
const ShopList = (props) => {
    return <ul className="shop-list">
        {props.shops.map((shop) => (<li key={shop._id}><ShopItem {...shop} /></li>))}
  </ul>;
};

export default ShopList;
