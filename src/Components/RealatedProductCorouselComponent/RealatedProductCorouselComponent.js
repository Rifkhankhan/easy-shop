import React, { useEffect } from 'react'
import './RealatedProductCorouselComponent.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Actions/ProductAction'
import star from './../../images/star.png'
import rating from './../../images/rating.png'

function RealatedProductCorouselComponent(props) {
	const products = useSelector(state => state.product.products)
	const dispatch = useDispatch()
	console.log(products)

	const brand = props.product.brand

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch, props])

	const settings = {
		infinite: true,
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 1000,

		responsive: [
			{
				breakpoint: 1290,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 910,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	}

	const relatedProducts = products?.filter(product => product.brand === brand)

	return (
		<div className="RealatedProductCorouselComponent-container">
			<Slider {...settings}>
				{relatedProducts.map(item => (
					<div key={item._id}>
						<img
							className="RealatedProductCorouselComponent-container-image"
							src={item.images}
							alt={item.name}
						/>
						<div className="slide-review-stars">
							<img src={star} alt="star" />
							<img src={star} alt="star" />
							<img src={star} alt="star" />
							<img src={rating} alt="star" />
						</div>
						<h4>{item.name}</h4>
						<p>Rs.{item.price}</p>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default RealatedProductCorouselComponent
