import React, { useEffect } from "react";
import './Electronics.css'
import { useDispatch, useSelector } from "react-redux";
import { getFruits, getProducts } from "../../Actions/FruitAction";
import ItemList from "../../Components/Item/ItemList";
import ElectronicsList from "../../Components/ElectronicsList/ElectronicsList";


const Electronics = () => {
  const dispatch = useDispatch()
  const fruits = useSelector(state => state.fruit.fruits)
  console.log(fruits);
  
  useEffect(() => {
      dispatch(getProducts('fruits'))
  },[])

  return <div className="fruit-container">
    <ElectronicsList shops={fruits} />
  </div>;
};

export default Electronics;
