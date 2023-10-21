/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Dashboard.css'
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar";
import AdminDashboardComponent from "../../Components/AdminDashboardComponent/AdminDashboardComponent";

const Dashboard = () => {

    return <div className="admin-dashboard">
        <AdminSideBar />
        <AdminDashboardComponent />
    </div>
};

export default Dashboard;
