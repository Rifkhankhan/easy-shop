import React from "react";
import ShopsComponent from "../../Components/ShopsComponent/ShopsComponent";
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar";
import './Shop.css'

const Shop = () => {
  return <div className="admin-shop-page">
        <AdminSideBar />
        <ShopsComponent />
  </div>;
};

export default Shop;
