import React from 'react'
import CreateProductComponent from '../../../Components/CreateProductComponent/CreateProductComponent'
import ShopSideBar from '../../../Components/ShopSideBar/ShopSideBar'
import './CreateProduct.css'

const CreateProduct = () => {
	return (
		<div className="shop-shop-create-page">
			<ShopSideBar />
			<CreateProductComponent />
		</div>
	)
}

export default CreateProduct
