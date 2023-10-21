import React from "react";
// import ShopsComponent from "../../Components/ShopsComponent/ShopsComponent";
import AdminSideBar from "../../../Components/AdminSideBar/AdminSideBar";
import CreateShopComponent from "../../../Components/CreateShopComponent/CreateShopComponent";
import './CreateShop.css'

const CreateShop = () => {
  return <div className="admin-shop-create-page">
        <AdminSideBar />
      <CreateShopComponent />
  </div>;
};

export default CreateShop;
