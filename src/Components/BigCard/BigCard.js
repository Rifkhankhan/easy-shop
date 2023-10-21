import React from 'react'
import { Link } from 'react-router-dom'
import './BigCard.css'
function BigCard(props) {
	const clickHandler = title => {
		props.clickHandler(title)
	}

	return (
		<div
			className="big-card-component-card"
			onClick={() => clickHandler(props.title)}>
			<h2>{props.title}</h2>
			<img src={props.image} alt="" />
			<Link to="/">See more</Link>
		</div>
	)
}

export default BigCard
