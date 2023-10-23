import React from "react";
import ShopsComponent from "../../Components/ShopsComponent/ShopsComponent";
import ShopSideBar from "../../../OwnerShop/Components/ShopSideBar/ShopSideBar";
import './Shop.css'

const Shop = () => {
  return <div className="admin-shop-page">
        <ShopSideBar />
        <ShopsComponent />
  </div>;
};

export default Shop;
