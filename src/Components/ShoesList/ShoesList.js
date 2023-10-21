import React from "react";
import './ShoesList.css'
import ShoeCard from "../ShoeCard/ShoeCard";

const ShoesList = (props) => {

    return <ul className="shoes-list">
        {props.shops.map((shop) => (<li key={shop._id}><ShoeCard {...shop} /></li>))}
  </ul>;
};

export default ShoesList;
