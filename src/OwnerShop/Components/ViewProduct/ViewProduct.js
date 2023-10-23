import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ViewProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../Redux/authSlice'
import AddPostModel from '../../../Components/AddPostModel/AddPostModel'
import { getFruit } from '../../../Actions/FruitAction'
import LoadingModel from '../../../Admin/Components/LoadingModel/LoadingModel'
import RealatedProductCorouselComponent from '../../../Components/RealatedProductCorouselComponent/RealatedProductCorouselComponent'
import { getShop } from '../../../Actions/ShopAction'
import star from '.././../../images/star.png'
import rating from '../../../images/rating.png'
import mouse from '../../../images/black-mouse.jpg'
import man from '../../../images/hardik-sharma-CrPAvN29Nhs-unsplash.jpg'

const ViewProduct = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const [modalOpen, setModalOpen] = useState(false)
	const loading = useSelector(state => state.product.loading)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const shop = useSelector(state => state.shop.shop)
	const authData = useSelector(state => state.auth.authData)
	const fruit = useSelector(state => state.fruit.fruit)
	const [selectedFile, setSelectedFile] = useState()
	const [displayImage,setDisplayImage] = useState(fruit.images)
	

	// edit image
	const [file, setFile] = useState()
	const [previewUrl, setPreviewUrl] = useState()
	const filePickerRef = useRef()
	const imageRef = useRef()

	const [previewSource, setPreviewSource] = useState()
	const [fileInputState, setFileInputState] = useState('')

	//handling the image uploading
	const handleFileInputChange = event => {
		const file = event.target.files[0]
		previewFile(file)
		setSelectedFile(file)
		setFileInputState(event.target.value)
	}

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
	const pickImageHandler = (e) => {
		console.log(e.currentTarget.getAttribute('src'))
		setDisplayImage(e.currentTarget.getAttribute('src'))
	}
	const pickHandler = e => {
		let pickedFile

		if (e.target.files && e.target.files.length === 1) {
			pickedFile = e.target.files[0]
			setFile(pickedFile)
		}
	}
	const catchFileDataHandler = e => {
		setSelectedFile(e)
	}

	//display a preview of uploaded image
	const previewFile = file => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewSource(reader.result)
		}
	}

	// const imageUploadHandler = async (e) => {
	// 	e.preventDefault()
	// 	let imageUrl;
	// 	let id;

	// 	const formData = new FormData()
	// 	formData.append('file', selectedFile)
	// 	formData.append('upload_preset', 'homedelivery')

	// 	try {
	// 	  await axios
	// 		.post(
	// 		  'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
	// 		  formData
	// 		)
	// 		.then(res => {

	// 		  imageUrl = res.data.secure_url
	// 		  id = res.data.public_id
	// 		})
	// 	} catch (error) {
	// 	  alert(error)
	// 	}

	// 	const data = {
	// 	  url:imageUrl,
	// 	  id:id
	// 	}
	// 	dispatch(uploadProfilePhoto(authData._id,data))

	//   }

	return (
		<div className="view-product-details-root-container">
			<div className="view-product-container">
				<section className="product-details-image">
					<div style={{ display: 'none' }}>
						<input
							type="file"
							name="image"
							ref={imageRef}
							onChange={handleFileInputChange}
							value={fileInputState}
							accept="image/png, image/jpeg"
						/>
					</div>
					{previewSource ? (
						<img
							src={previewSource}
							alt="preview"
							className="editable-product-image"
							onClick={() => imageRef?.current.click()}
						/>
					) : (
						<img
							className="editable-product-image"
							src={displayImage}
							alt="profile-image"
							onClick={() => imageRef?.current.click()}
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
						<input
							type="file"
							name=""
							value=""
							style={{ display: 'none' }}
							accept=".jpg,.png,.jpeg"
							onChange={pickHandler}
							ref={filePickerRef}
						/>

						<img
							src={fruit.images}
							onClick={pickImageHandler}
							className="editable-product-image"
							alt=""
						/>
						<img
							src={star}
							onClick={pickImageHandler}
							className="editable-product-image"
							alt=""
						/>
						<img
							src={man}
							onClick={pickImageHandler}
							className="editable-product-image"
							alt=""
						/>
						<img
							src={mouse}
							onClick={pickImageHandler}
							className="editable-product-image"
							alt=""
						/>
					
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
