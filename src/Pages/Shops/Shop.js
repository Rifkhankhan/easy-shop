import React, { useEffect } from 'react'
import ShopList from '../../Components/Shop/ShopList'
import './Shop.css'
import { getShops } from '../../Actions/ShopAction'
import { useDispatch, useSelector } from 'react-redux'
import backgroundImage1 from '../../images/ShoppingMall/hua-thun-ho-9IanjYPeoLU-unsplash.jpg'
import backgroundImage2 from '../../images/ShoppingMall/pesce-huang-W7PZYROl63Y-unsplash.jpg'
import backgroundImage3 from '../../images/ShoppingMall/k-f-8Gmi5OqGw8E-unsplash.jpg'

const Fruits = () => {
	const shops = useSelector(state => state.shop.shops)
	const dispatch = useDispatch()

	// time to time change the background images

	// const images = [backgroundImage1, backgroundImage2, backgroundImage3]
	// var imageHead = document.getElementById("shop-container");
	// var i = 0;

	// setInterval(function() {
	//       imageHead.style.backgroundImage = images[i];
	//       console.log(images);
	//       i = i + 1;
	//       if (i == images.length) {
	//         i =  0;
	//       }
	// }, 50000);

	useEffect(() => {
		dispatch(getShops())
	}, [])

	return (
		<div
			className="shop-container"
			id="shop-container"
			style={{
				backgroundColor: 'rgba(2, 4, 36, 0.747)'
			}}>
			<div className="shop-container-banner">
				<h1>Available Shops</h1>
			</div>
			<ShopList shops={shops} />
		</div>
	)
}

export default Fruits
