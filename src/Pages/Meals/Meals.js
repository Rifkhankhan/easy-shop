import React, { useEffect } from "react";
import './Meals.css'

import RecipeList from "../../Components/RecipeList/RecipeList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Actions/FruitAction";

const Meals = () => {
	const dispatch = useDispatch()
	const fruits = useSelector(state => state.fruit.fruits)
	console.log(fruits);

  useEffect(() => {
    dispatch(getProducts('fruits'))
},[])
  return <div className="recipe-container">
    <RecipeList shops={fruits} />
  </div>;
};

export default Meals;
