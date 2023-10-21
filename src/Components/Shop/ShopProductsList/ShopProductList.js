import React from "react";
import './ShopProductList.css'
import ShopProductItem from '../../../Components/Shop/ShopProductsItem/ShopProductItem'

const ShopProductList = (props) => {
  return <div className="shop-product-list">
        <ul>
              {props.products.map((product) => (<li key={product.id}><ShopProductItem {...product} /></li>))}
        </ul>;
  </div>
 
};

export default ShopProductList;
