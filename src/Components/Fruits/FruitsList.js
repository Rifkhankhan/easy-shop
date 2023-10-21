import React from "react";
import FruitsItem from "./FruitsItem";
import './FruitsList.css'
const FruitsList = (props) => {

    return <ul className="fruit-list">
        {props.shops.map((shop) => (<li key={shop.id}><FruitsItem {...shop} /></li>))}
  </ul>;
};

export default FruitsList;
