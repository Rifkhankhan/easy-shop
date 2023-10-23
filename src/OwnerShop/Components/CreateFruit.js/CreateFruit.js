import React from "react";
import CreateFruitComponent from "../../../../Admin/Components/CreateFruitComponent/CreateFruitComponent";
import AdminSideBar from "../../../Components/AdminSideBar/AdminSideBar";
import './CreateFruit.css'

const CreateFruit = () => {
  return <div className="admin-shop-create-page">
        <AdminSideBar />
        <CreateFruitComponent />
  </div>;
};

export default CreateFruit;
