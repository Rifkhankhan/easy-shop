import React from "react";
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = (props) => {
  console.log(props);
  return <ul className="product-list">
        {props.products.map((product) => (<li key={product.id}><ProductCard {...product} /></li>))}
  </ul>;
};

export default ProductList;
