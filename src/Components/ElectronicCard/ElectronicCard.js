import React from 'react'
import './ElectronicCard.css'
import electronic from './../../images/mouse.jpg'

const ElectronicCard = props => {
	// const myStyle ={
	//     backgroundImage:'url("./../../images/Recipes/deryn-macey-kPLccIMtS8E-unsplash.jpg")'
	// }
	return (
		<div className="electronic-card">
			<div className="electronic-imgBox">
				<img src={electronic} alt="mouse corsair" className="electronic-mouse" />
			</div>

			<div className="electronic-contentBox">
				<h3>Mouse Corsair M65</h3>
				<h2 className="electronic-price">
					61.<small>98</small> €
				</h2>
				<a href="#" className="electronic-buy">
					Buy Now
				</a>
			</div>
		</div>
	)
}

export default ElectronicCard
