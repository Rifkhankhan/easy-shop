import React, { useEffect } from "react";
import './Clothes.css'
import { useDispatch, useSelector } from "react-redux";
import { getFruits, getProducts } from "../../Actions/FruitAction";
import ItemList from "../../Components/Item/ItemList";
import ClotheList from "../../Components/Item/ClotheList";

const Clothes = () => {
  const dispatch = useDispatch()
  const fruits = useSelector(state => state.fruit.fruits)
  console.log(fruits);
  
  useEffect(() => {
      dispatch(getProducts('fruits'))
  },[])

  return <div className="clothes-page-container">
    <ClotheList shops={fruits} />
  </div>;
};

export default Clothes;
