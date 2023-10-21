import React, { useEffect } from "react";
import './Meals.css'
import ItemList from "../../Components/Item/ItemList";
import { useState } from "react";

const Meals = () => {
  const [meals,setMeals] = useState()

  useEffect(() => {
		const sendRequest = async () => {
			try {
				const response = await fetch("www.themealdb.com/api/json/v1/1/categories.php")

				const responseData = await response.json()

				console.log(responseData)

				setMeals(responseData)

				if (!response.ok()) {
					throw new Error("Something went wrong")
				}
			} catch (err) {
				console.log('Error Getting Data')
			}
		}
		sendRequest()
	}, [])

  console.log(meals);

  return <div className="fruit-container">
    {/* <ItemList shops={meals} /> */}
  </div>;
};

export default Meals;
