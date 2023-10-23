/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import './ShopSideBar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import arrow from '../../../images/arrow.png'
import previous from '../../../images/previous.png'
import rightArrow from '../../../images/sidebar-right-arrow .png'
import humberger from '../../../images/hamburger.png'

const ShopSideBar = ({ hideSideBar }) => {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	)
	const [sideBarOpen, setSideBarOpen] = useState(
		windowDimensions.width >= 1200 ? true : false
	)
	const handleClick = e => {
		e.preventDefault()

		// console.log(e.currentTarget.className); //useState
		// ref.current.className // ref
		// 👇️ toggle class on click
		// event.currentTarget.classList.toggle('bg-salmon');

		// 👇️ add class on click
		// event.currentTarget.classList.add('bg-salmon');

		// 👇️ remove class on click
		// event.currentTarget.classList.remove('bg-salmon');
		if (e.currentTarget.classList.contains('shop-btn')) {
			document
				.getElementsByClassName('shop-ul')[0]
				.classList.toggle('shop-show')
		}

		if (e.currentTarget.classList.contains('fruit-btn')) {
			document
				.getElementsByClassName('fruit-ul')[0]
				.classList.toggle('fruit-show')
		}

		if (e.currentTarget.classList.contains('phone-btn')) {
			document
				.getElementsByClassName('phone-ul')[0]
				.classList.toggle('phone-show')
		}

		//  if(e.currentTarget.classList.contains('sidebar-btn')){
		//     document.getElementsByClassName('sidebar-btn')[0].classList.toggle('sidebar-btn-toggle');
		//     document.getElementsByClassName('owner-sidebar')[0].classList.toggle('owner-sidebar-hide');

		//  }

		// when show and hide sidebar change the width of owner Dashboard component
		//    document.getElementsByClassName('ownerDashboardComponent')[0].classList.toggle('ownerDashboardComponent-fullWidth-toggle');
	}

	// hideSideBarHandler
	const hideSideBarHandler = () => {
		setSideBarOpen(!sideBarOpen)
		hideSideBar(sideBarOpen)
	}

	const humberHandler = () => {}

	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window
		return {
			width,
			height
		}
	}
	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions())
		}

		console.log(windowDimensions)
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [windowDimensions])

	return (
		<div className="owner-sidebar-container">
			{sideBarOpen && windowDimensions.width >= 1200 && (
				<img
					src={arrow}
					className="arrow left-arrow"
					alt="arrow"
					onClick={hideSideBarHandler}
				/>
			)}
			{!sideBarOpen && windowDimensions.width >= 1200 && (
				<img
					src={rightArrow}
					className="arrow right-arrow"
					alt="arrow"
					onClick={hideSideBarHandler}
				/>
			)}
			{windowDimensions.width < 1200 && (
				<img
					src={humberger}
					className="arrow sidebar-humber"
					alt="arrow"
					onClick={humberHandler}
				/>
			)}
			{sideBarOpen && windowDimensions.width >= 1200 && (
				<nav className="owner-sidebar">
					{/* <div className="app-heading">Easy shop</div> */}
					{/* <div className="sidebar-btn" onClick={handleClick}></div> */}
					<ul className="owner-sidebar-ul">
						<li>
							<Link>Dashboard</Link>
						</li>
						<li>
							<Link to="/owner-shop" className="shop-btn" onClick={handleClick}>
								Products
							</Link>
							<ul className="owner-sidebar-ul-ul shop-ul">
								<li>
									<Link to="/owner/products">Products</Link>
								</li>
								<li>
									<Link to="/owner/create-product">Create Product</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link to="/products-pending">Pending List</Link>
						</li>

						<li>
							<Link to="/products-processing">Processing List</Link>
						</li>

						<li>
							<Link to="/products-cancel">Cancel List</Link>
						</li>

						<li>
							<Link to="/products-return">Return List</Link>
						</li>
						<li>
							<Link to="/shop-followers">Followers</Link>
						</li>
					</ul>
				</nav>
			)}
		</div>
	)
}

export default ShopSideBar
