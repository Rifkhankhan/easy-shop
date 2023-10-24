import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ViewProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../Redux/authSlice'
import AddPostModel from '../../../Components/AddPostModel/AddPostModel'
import { deleteImage, getFruit } from '../../../Actions/FruitAction'
import LoadingModel from '../../../Admin/Components/LoadingModel/LoadingModel'
import { getShop } from '../../../Actions/ShopAction'
import { pushImage } from '../../../Actions/FruitAction'
import star from '.././../../images/star.png'
import rating from '../../../images/rating.png'

import plus from '../../../images/plus.png'
import check from '../../../images/check.png'
import axios from 'axios'

// Task to do in this view page
// 1. need to add new image
// 2. need to edit and delete images
// 3. need to edit product

const ViewProduct = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const [modalOpen, setModalOpen] = useState(false)

	const shop = useSelector(state => state.shop.shop)
	const authData = useSelector(state => state.auth.authData)
	const fruit = useSelector(state => state.fruit.fruit)
	
	const [selectedAddingFile, setSelectedAddingFile] = useState()
	const [selecteDeleteFile, setSelectedDeleteFile] = useState()
	const [displayImage, setDisplayImage] = useState(fruit?.images ? fruit.images[0] : star)
	// add image

	const [addingFileInputState, setAddingFileInputState] = useState('')
	const [deleteFileInputState, setDeleteFileInputState] = useState('')
	const [previewAddingSource, setPreviewAddingSource] = useState()

	// edit image
	const addingImageRef = useRef()

	// image adding handler
	const handleAddingImageFileInputChange = event => {
		const file = event.target.files[0]
		previewAddingFile(file)
		setSelectedAddingFile(file)
		setAddingFileInputState(event.target.value)
	}
	//display a preview of adding uploaded image
	const previewAddingFile = file => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewAddingSource(reader.result)
		}
	}
	useEffect(() => {
		console.log('run');
		if(fruit?.images){
			setDisplayImage(fruit?.images[0])
		}
	},[fruit])

	// end edit image

	// const currentUrl = window.location.pathname
	// console.log(currentUrl)
	useEffect(() => {
		if (!!localStorage.getItem('user')) {
			console.log(!!localStorage.getItem('user'))
			dispatch(authActions.autoLogin(!!localStorage.getItem('user')))
		}
	}, [])

	useEffect(() => {
		dispatch(getFruit(id))
	}, [id])

	useEffect(() => {
		dispatch(getShop(fruit.shopId))
	}, [fruit])
	// const addCardHandler = () => {
	//   if(isAuthenticated){
	//     dispatch(addToCard(JSON.parse(localStorage.getItem('user')).result._id,id))
	//   }else{
	//     navigate('/login')
	//   }
	// }

	const cardHandler = id => {
		setModalOpen(true)
	}
	const buyHandler = id => {
		setModalOpen(true)
	}
	const modelHandler = status => {
		setModalOpen(status)
	}

	// edit image handler

	
	const pickImageHandler = e => {
		console.log(e.currentTarget.getAttribute('src'))
		setDisplayImage(e.currentTarget.getAttribute('src'))
	}
	

	

	const imageUploadHandler = async e => {
		console.log('clicked');
		e.preventDefault()
		let imageUrl
		let id

		const formData = new FormData()
		formData.append('file', selectedAddingFile)
		formData.append('upload_preset', 'homedelivery')

		try {
			await axios
				.post(
					'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
					formData
				)
				.then(res => {
					imageUrl = res.data.secure_url
					id = res.data.public_id
				})
		} catch (error) {
			alert(error)
		}

		const data = {
			url: imageUrl,
			id: id
		}
		console.log(data);
		dispatch(pushImage(fruit._id, data))
	}

	const deleteHandler = () => {
		dispatch(deleteImage(fruit._id,{id:displayImage}))
	}

	return (
		<div className="view-product-details-root-container">
			<div className="view-product-container">
				<section className="product-details-image">
					<div style={{ display: 'none' }}>
					
						<input
							type="file"
							name="image"
							ref={addingImageRef}
							onChange={handleAddingImageFileInputChange}
							value={addingFileInputState}
							accept="image/png, image/jpeg"

						/>
					</div>
					{previewAddingSource ? (
						<img
							src={previewAddingSource}
							alt="preview"
							className="editable-product-image"
						/>
					) : (
						<img
							src={displayImage}
							className="editable-product-image"
							alt="profile-image"
							onClick={deleteHandler}
						
						/>
					)}
				</section>
				<section className="product-details-data">
					<p className="product-details-desc">
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor
						at Hampden-Sydney College in Virginia, looked up one of the more
						obscure Latin words, consectetur, from a Lorem Ipsum passage, and
						going through the cites of the word in classical literature,
						discovered the undoubtable source. Lorem Ipsum comes from sections
					</p>
					<div className="review-stars">
						<img src={star} alt="star" />
						<img src={star} alt="star" />
						<img src={star} alt="star" />
						<img src={rating} alt="star" />
					</div>
					<h3 className="price">Rs.{fruit.price}</h3>
					<h3 className="existence">
						{fruit.existence > 0 ? 'In Stock' : 'Out of stock'}
					</h3>
					<div className="shop-details">
						<h3>in {shop.name}</h3>
					</div>
					<div className="product-images">
						

						{fruit?.images?.map(image => 	<img
								src={image}
								className="editable-product-image"
								alt=""
								onClick={pickImageHandler}
							
							/>)}

						{previewAddingSource ? (
							<img
								src={previewAddingSource}
								className="editable-product-image"
								alt=""
								onClick={() => addingImageRef?.current.click()}

							/>
						) : (
							<img style={{ display: 'none' }} alt="" />
						)}
					{!previewAddingSource ?	<img
							src={plus}
							alt=""
							className="plus-btn"
							onClick={() => addingImageRef?.current.click()}

						/> : (
							<img
							src={check}
							alt=""
							className="plus-btn"
							onClick={ imageUploadHandler}
						/> 
						)}
					</div>
					<div className="payment-details">
						<button onClick={() => cardHandler(id)}>Add to card</button>
						<button onClick={() => buyHandler(id)}>Buy</button>
					</div>
				</section>

				{modalOpen && (
					<section>
						<AddPostModel
							modelHandler={modelHandler}
							item={fruit}
							user={authData}
						/>
					</section>
				)}
				{!fruit && (
					<section>
						<LoadingModel />
					</section>
				)}
			</div>
		</div>
	)
}

export default ViewProduct
