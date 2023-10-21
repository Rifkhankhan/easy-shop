import React from "react";
import './ClotheList.css'
import ClotheCard from "../ClotheCard/ClotheCard";

const ClotheList = (props) => {

    return <ul className="clothe-list">
        {props.shops.map((shop) => (<li key={shop._id}><ClotheCard {...shop} /></li>))}
  </ul>;
};

export default ClotheList;
