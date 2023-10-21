import React from "react";
import './ShopProductItem.css'

const ShopProductItem = (props) => {
    console.log(props.image);
  return <div className="shop-product-item">
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <h3>{props.ram} {props.rom}</h3>
        <h3>{props.price}</h3>
    </div>;
};

export default ShopProductItem;
