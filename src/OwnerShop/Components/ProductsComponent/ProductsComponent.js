import React, { useEffect } from 'react'
import FruitsList from '../Fruits/FruitsList'
import './ProductsComponent.css'
import { getFruits, getProducts } from '../../../Actions/FruitAction'
import { useDispatch, useSelector } from 'react-redux'
import ProductTable from '../../../OwnerShop/Components/ProductTable/ProductTable'

const ProductsComponent = () => {
	const dispatch = useDispatch()
	const fruits = useSelector(state => state.fruit.fruits)

	useEffect(() => {
		dispatch(getProducts('fruits'))
	}, [])

	// tables headers
	
	const headers = [
		"No","Name","Category","Existence","Price","Image","Shop","Sales Count"
	]

	return (
		<div className="Admin-ShopsComponent">
			{/* <FruitsList shops={fruits} /> */}
			<ProductTable headers={headers} products={fruits}/>
		</div>
	)
}

export default ProductsComponent
