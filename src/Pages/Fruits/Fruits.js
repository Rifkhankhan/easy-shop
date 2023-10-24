import React, { useEffect } from "react";
import './Fruits.css'
import { useDispatch, useSelector } from "react-redux";
import { getFruits, getProducts } from "../../Actions/FruitAction";
import ItemList from "../../Components/Item/ItemList";
const Fruits = () => {
  const dispatch = useDispatch()
  const fruits = useSelector(state => state.fruit.fruits)
  console.log(fruits);
  
  useEffect(() => {
      dispatch(getProducts('fruits'))
  },[])
  console.log(fruits);
  return <div className="fruit-container">
    <ItemList shops={fruits} />
  </div>;
};

export default Fruits;
