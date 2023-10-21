import React from "react";
import ShopsComponent from "../../../Shop/Components/ShopsComponent/ShopsComponent";
import ShopSideBar from "../../Components/ShopSideBar/ShopSideBar";
import './Dashboard.css'

const Dashboard = () => {
  return <div className="admin-shop-page">
        <ShopSideBar />
        <ShopsComponent />
  </div>;
};

export default Dashboard;
