import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardList } from "../../Actions/userAction";
import { authActions } from "../../Redux/authSlice";
import CardList from "../Card/CardList";
import './RightSideCardComponent.css'

const RightSideCardComponent = ({showCardToggleHandler}) => {
  const card = useSelector(state => state.auth.card)
  console.log(card);
 
  return <div className="RightSideCardComponent">
        <CardList card={card} />
    </div>;
  };

export default RightSideCardComponent;
