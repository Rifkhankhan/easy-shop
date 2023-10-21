import React from "react";
import { useNavigate } from "react-router-dom";
import './FruitsItem.css'
const FruitsItem = (props) => {
    const navigate = useNavigate()
    const shopDetailsHandler = (id) => {
        navigate(`/admin-fruit/${id}`)
    }
    return <div className="admin-fruit-card" onClick={() => shopDetailsHandler(props._id)}>
          <img src={props.images} alt="" />
          <h3>{props.name}</h3>
      </div>;
};

export default FruitsItem;
