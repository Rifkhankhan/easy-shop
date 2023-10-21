import React, { useEffect } from "react";
import './PhonesComponent.css'
// import phones from '../../../Products/Phone'
import ProductList from "../../../Components/ProductCard/ProductList";


const PhonesComponent = (props) => {
 
  return<div className="Admin-ShopsComponent">
    <div className="category-tool-bar">

    </div>
      {props.phones && <ProductList products={props.phones} />}
      {props.phones.length ===0 && <p>There is no products</p>}
  </div>;
};

export default PhonesComponent;
