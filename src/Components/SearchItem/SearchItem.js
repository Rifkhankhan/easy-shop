import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchItem.css'
import star from './../../images/star.png'
import rating from './../../images/rating.png'
const SearchItem = ({item}) => {
	const navigate = useNavigate()
    console.log(item);
    const handler = id => {
		navigate(`/fruits/${id}`)
	}
	return (
		<div className="search-item-container">
				<div
					className="search-item"
					onClick={() => handler(item._id)}
					key={item._id}>
					<img src={item.images[0]} alt="" />
					<div className="search-item-container-desc">
						<h1 class="name">{item.name}</h1>
						<h3 class="year">Rs.{item.price}</h3>
                        <div className="slide-review-stars">
							<img src={star} alt="star" />
							<img src={star} alt="star" />
							<img src={star} alt="star" />
							<img src={rating} alt="star" />
						</div>
						<h3 class="year">{item.existence > 0 ? "In stock" : "Out of stock"}</h3>
					</div>
				</div>
		</div>
	)
}

export default SearchItem
