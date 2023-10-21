import React from "react";
import { useNavigate } from "react-router-dom";
import './ShopItem.css'
const ShopItem = (props) => {
    const navigate = useNavigate()
    const shopDetailsHandler = (id) => {
        navigate(`/Shops/${id}`)
    }
    return <div className="shop-card" onClick={() => shopDetailsHandler(props._id)}>
          <img src={props.images} alt="" />
          <h3>{props.name}</h3>
      </div>;
};

export default ShopItem;
