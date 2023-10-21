import React from 'react'
import shirt from '../../images/Shoes For Men/download (2).jpg'
import './ShoeCard.css'

const ShoeCard = () => {
	return (
		<div className="shoe-card-container">
			<div className="shoe-card">
				<div className="shoe-card-imgBx">
					<img src={shirt} alt="" />
				</div>

				<div className="shoe-card-contentBx">
					<h2>Nike Shoes</h2>

					<div className="shoe-card-size">
						<h3>Size :</h3>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
					</div>

					<div className="shoe-card-color">
						<h3>Color :</h3>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<a href="#">Buy Now</a>
				</div>
			</div>
		</div>
	)
}

export default ShoeCard
