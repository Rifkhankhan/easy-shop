import React from "react";
import './ProductCard.css'
const ProductCard = (props) => {
  return <div className="product-card">
        <img src={props.images[0]} alt="" />
        <h3>{props.name}</h3>
        <h3>{props.ram} {props.rom}</h3>
        <h3>{props.price}</h3>
    </div>;
};

export default ProductCard;
