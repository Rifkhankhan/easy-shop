import React, { useEffect } from "react";
import FruitsList from "../../Components/Fruits/FruitsList";
import './FruitsComponent.css'
import { getFruits, getProducts } from "../../../Actions/FruitAction";
import { useDispatch, useSelector } from "react-redux";

const FruitsComponent = () => {
  const dispatch = useDispatch()
  const fruits = useSelector(state => state.fruit.fruits)

  useEffect(() => {
    dispatch(getProducts('fruits'))
},[])

  return<div className="Admin-ShopsComponent">
      <FruitsList shops={fruits} />
  </div>;
};

export default FruitsComponent;
