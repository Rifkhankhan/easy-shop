import React, { useEffect } from "react";
import './Shoes.css'
import { useDispatch, useSelector } from "react-redux";
import { getFruits, getProducts } from "../../Actions/FruitAction";

import ShoesList from "../../Components/ShoesList/ShoesList";

const Shoes = () => {
  const dispatch = useDispatch()
  const fruits = useSelector(state => state.fruit.fruits)
  console.log(fruits);
  
  useEffect(() => {
      dispatch(getProducts('fruits'))
  },[])

  return <div className="shoes-page-container">
    <ShoesList shops={fruits} />
  </div>;
};

export default Shoes;
