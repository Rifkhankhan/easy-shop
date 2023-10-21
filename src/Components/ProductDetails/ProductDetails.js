import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetails.css'
import fruits from '../../Products/Fruits'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../../Redux/ProductSlice'
import { authActions } from '../../Redux/authSlice'
import { addToCard } from '../../Actions/userAction'
import AddPostModel from '../AddPostModel/AddPostModel'
import { getFruit } from '../../Actions/FruitAction'
import LoadingModel from '../../Admin/Components/LoadingModel/LoadingModel'
import RealatedProductCorouselComponent from '../RealatedProductCorouselComponent/RealatedProductCorouselComponent'
import { getShop } from '../../Actions/ShopAction'
import star from './../../images/star.png'
import rating from './../../images/rating.png'

const ProductDetails = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [modalOpen, setModalOpen] = useState(false)
	const loading = useSelector(state => state.product.loading)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const shop = useSelector(state => state.shop.shop)
	const authData = useSelector(state => state.auth.authData)
	const fruit = useSelector(state => state.fruit.fruit)

	const currentUrl = window.location.pathname;
	console.log(currentUrl);
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

	return (
		<div className="product-details-root-container">
			<p className='current-path'>{currentUrl}</p>
			<div className="product-details-container">
				<div className="product-details-images">
					<img src={fruit.images} alt="" />
					<img src={fruit.images} alt="" />
					<img src={fruit.images} alt="" />
				</div>
				<div className="product-details-container-div">
					<section className="product-details-image">
						<img src={fruit.images} alt="" />
					</section>
					<section className="product-details-data">
						<p className="product-details-desc">
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections
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
						<h3 className="shop-details-heading">Shop Details</h3>
						<div className="shop-details">
							<img src={shop.images} alt="star" />
							<div>
								<h3>{shop.name}</h3>
								<p>{shop.address}</p>
							</div>
						</div>
						<div className="payment-details">
							<button onClick={() => cardHandler(id)}>Add to card</button>
							<button onClick={() => buyHandler(id)}>Buy</button>
						</div>
					</section>
				</div>

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
			<hr/>
			<div className="related-products">
				<h3>Deals on related products</h3>
				<div className="products-related-to-this-item">
					<RealatedProductCorouselComponent product={fruit} />
				</div>
			</div>
			<hr/>

		</div>
	)
}

export default ProductDetails
