import React from "react";
// import ShopsComponent from "../../Components/ShopsComponent/ShopsComponent";
import AdminSideBar from "../../../Components/AdminSideBar/AdminSideBar";
import CreatePhoneComponent from "../../../Components/CreatePhoneComponent/CreatePhoneComponent";
import './CreatePhone.css'

const CreatePhone = () => {
  return <div className="admin-shop-create-page">
        <AdminSideBar />
        <CreatePhoneComponent />
  </div>;
};

export default CreatePhone;
