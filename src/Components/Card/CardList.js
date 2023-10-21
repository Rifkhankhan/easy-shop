import React from "react";
import CardItem from "./CardItem";
import './CardList.css'

const CardList = (props) => {
  return <ul className="card-list">
    {
      props.card.map(card => <li key={card._id}><CardItem {...card} /></li>)
    }
  </ul>;
};

export default CardList;
