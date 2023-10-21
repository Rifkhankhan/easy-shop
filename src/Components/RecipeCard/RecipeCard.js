import React from 'react'
import './RecipeCard.css'
import recipe from './../../images/Recipes/deryn-macey-kPLccIMtS8E-unsplash.jpg'
const RecipeCard = props => {
	// const myStyle ={
	//     backgroundImage:'url("./../../images/Recipes/deryn-macey-kPLccIMtS8E-unsplash.jpg")'
	// }
	return (
		<div className="recipe-card">
			<div
				className="recipe-card-front"
				style={{ backgroundImage: `url(${recipe})` }}></div>
			<div className="recipe-card-back">
				<h1>{props.name}</h1>
				<p>
					when an unknown printer took a galley of type and scrambled it to make
					a type specimen book. It has survived not only five centuries
				</p>
                <h3><span className='recipe-price'>{props.price}</span></h3>
                <div className='recipe-ing'>
                    <p>Apple</p>
                    <p>Banana</p>
                    <p>Mango</p>
                    <p>Junk</p>
                    <p>Grape</p>
                </div>

                <button className='recipe-button'>View recipe</button>
			</div>
		</div>
	)
}

export default RecipeCard
