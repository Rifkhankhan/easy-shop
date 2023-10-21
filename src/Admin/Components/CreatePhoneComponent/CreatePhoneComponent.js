import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../../Actions/ProductAction'
import { getShops } from '../../../Actions/ShopAction'
import { createFruit } from '../../../API/FruitApi'
import CreateProduct from '../../../Shop/Pages/Dashboard/CreateProduct.js/CreateProduct'
import ImageUploader from '../ImageUploader/ImageUploader'
import './CreatePhoneComponent.css'

const CreatePhoneComponent = () => {
	const [name, setName] = useState()
	const [category, setCategory] = useState()
	const [shop, setShop] = useState()
	const [price, setPrice] = useState()
	const [existence, setExistence] = useState()
	const [validation, setValidation] = useState(false)
	const dispatch = useDispatch()
	const [selectedFile, setSelectedFile] = useState()
	const isLoading = useSelector(state => state.shopUi.isLoading)
	const shops = useSelector(state => state.shop.shops)

	const categories = ['fruits', 'phones', 'clothes', 'toys', 'shoes', 'sops']

	useEffect(() => {
		dispatch(getShops())
	}, [])
	const nameHandler = e => {
		setName(e.target.value)
	}
	const categoryHandler = e => {
		setCategory(e.target.value)
	}
	const shopHandler = e => {
		setShop(e.target.value)
	}

	const priceHandler = e => {
		setPrice(e.target.value)
	}

	const existenceHandler = e => {
		setExistence(e.target.value)
	}

	const formSubmitHandler = async e => {
		e.preventDefault()

		let image
		const formData = new FormData()
		formData.append('file', selectedFile)
		formData.append('fileName', selectedFile.name)
		formData.append('upload_preset', 'homedelivery')

		try {
			await axios
				.post(
					'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
					formData
				)
				.then(res => {
					image = res.data.secure_url
				})
		} catch (error) {
			alert(error)
		}

		dispatch(
			createProduct({
				name: name,
				price: price,
				category: category,
				shop: shop,
				existence: existence,
				image: image
			})
		)
	}

	const catchFileDataHandler = e => {
		setSelectedFile(e)
	}

	return (
		<div className="CreateFruitComponent">
			<div className="CreateFruitComponent-form-container">
				<div className="CreateFruitComponent-heading">Create new phone</div>
				<form
					onSubmit={formSubmitHandler}
					className="CreateFruitComponent-form">
					<div className="CreateFruitComponent-form-group">
						<label>Phone Name</label>
						<input
							type="text"
							defaultValue={name}
							onChange={nameHandler}
							placeholder="Enter Phone Name"></input>
					</div>

					<div className="CreateFruitComponent-form-group">
						<label>Category</label>
						<select onChange={categoryHandler}>
							{categories.map(shop => (
								<option key={shop} value={shop}>
									{shop}
								</option>
							))}
						</select>
						{/* <input defaultValue={category} placeholder="Enter Fruit Category"  onChange={categoryHandler}></input> */}
					</div>

					<div className="CreateFruitComponent-form-group">
						<label>Phone Name</label>
						<select onChange={shopHandler}>
							{shops.map(shop => (
								<option key={shop._id} value={shop._id ? shop._id : shop.name}>
									{shop.name}
								</option>
							))}
						</select>
						{/* <input type='text' defaultValue={shop} onChange={shopHandler} placeholder="Enter Shop Name"></input> */}
					</div>

					<div className="CreateFruitComponent-form-group">
						<label>Price</label>
						<input
							type="number"
							defaultValue={price}
							onChange={priceHandler}
							placeholder="Enter Phone Price"></input>
					</div>

					<div className="CreateFruitComponent-form-group">
						<label>existence</label>
						<input
							type="number"
							defaultValue={existence}
							onChange={existenceHandler}
							placeholder="Enter Phone Existence"></input>
					</div>

					<div className="CreateFruitComponent-form-group">
						<label>Phone Image</label>
						<ImageUploader onInput={catchFileDataHandler} />
					</div>

					<div className="CreateFruitComponent-form-btn">
						{isLoading ? (
							<button
								type="submit"
								disabled={true}
								className="submit-btn loading-btn">
								Loading
							</button>
						) : (
							<button type="submit" className="submit-btn notLoading-btn">
								Submit
							</button>
						)}
					</div>
				</form>
			</div>
			<div className="CreateFruitComponent-image"></div>
		</div>
	)
}

export default CreatePhoneComponent
