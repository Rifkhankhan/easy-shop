import React from 'react'
import './ElectronicsList.css'
import ElectronicCard from '../ElectronicCard/ElectronicCard'

const ElectronicsList = props => {
	return (
		<ul className="electronic-list">
			{props.shops.map(shop => (
				<li key={shop._id}>
					<ElectronicCard {...shop} />
				</li>
			))}
		</ul>
	)
}

export default ElectronicsList
