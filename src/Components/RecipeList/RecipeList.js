import React from 'react'
import './RecipeList.css'
import RecipeCard from '../RecipeCard/RecipeCard'

const RecipeList = props => {
	return (
		<ul className="recipe-list">
			{props.shops.map(shop => (
				<li key={shop._id}>
					<RecipeCard {...shop} />
				</li>
			))}
		</ul>
	)
}

export default RecipeList
