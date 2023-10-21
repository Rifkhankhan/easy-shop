import React from "react";
import Item from "./Item";
import './ItemList.css'

const ItemList = (props) => {

    return <ul className="item-list">
        {props.shops.map((shop) => (<li key={shop._id}><Item {...shop} /></li>))}
  </ul>;
};

export default ItemList;
