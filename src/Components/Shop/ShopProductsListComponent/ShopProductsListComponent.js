import React from "react";
import ShopProductList from "../../../Components/Shop/ShopProductsList/ShopProductList";
import './ShopProductsListComponent.css'
const ShopProductsListComponent = ({shop,products}) => {
  return <div className="shop-products-list-component-container">
          <div className="shop-details-list-container-banner">
                  <h1>{shop.name}</h1>
          </div>
          <ShopProductList products={products}/>
  </div>
};

export default ShopProductsListComponent;
