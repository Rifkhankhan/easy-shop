/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import './Dashboard.css'
import ShopSideBar from "../../../OwnerShop/Components/ShopSideBar/ShopSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sideBarOpen,setSideBarOpen] = useState(true);

    const hideSideBarHandler = (open) => {
        setSideBarOpen(!open)
        console.log(sideBarOpen ," from dashboard");

    }
    return <div className={sideBarOpen ? "shop-dashboard-open" : "shop-dashboard-close"}>
        <ShopSideBar hideSideBar={hideSideBarHandler}/>
        <Outlet />
    </div>
};

export default Dashboard;
