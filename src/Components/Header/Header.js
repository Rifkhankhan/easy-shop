/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Header.css'

import loginBtn from '../../images/Header Butttons/login.png'
import logoutBtn from '../../images/Header Butttons/logout.png'
import burgerBtn from '../../images/hamburger.png'
import cancel from '../../images/cancel.png'
import notificationLogo from '../../images/Header Butttons/notification.png'
import profileLogo from '../../images/Header Butttons/profile.png'
import cartImage from '../../images/Header Butttons/cart.png'
import setting from '../../images/setting.png'
import settingHover from '../../images/settingHover.png'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../Redux/authSlice'
import { getAuthData, getCardList, getUserData } from '../../Actions/userAction'
import { autoLogin } from '../../Actions/AuthAction'
import { current } from '@reduxjs/toolkit'
import { useRef } from 'react'
import rightArrow from '../../images/right-arrow.png'

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

const Header = props => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const card = useSelector(state => state.auth.card)
	const authData = useSelector(state => state.auth.authData)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const [settingIsOpen, setSettingIsOpen] = useState(false)
	const [query, setQuery] = useState('')
	const ref = useRef(null)
	const [searcClick, setSearchClicked] = useState(true)

	// useEffect(() => {
	//   if(!!localStorage.getItem('user')){
	//      dispatch(getUserData())
	//   }else{
	//     dispatch(authActions.autoLogin(!!localStorage.getItem('user')))
	//     // navigate('/login')
	//   }
	// },[dispatch])

	// console.log(authData);
	const logoutHandler = () => {
		dispatch(authActions.logout())
		setIsOpen(false)
		setSettingIsOpen(false)
		document
			.getElementsByClassName('header-dropDown')[0]
			.classList.remove('header-dropDown-show')
		navigate('/login')
	}

	// useEffect(() => {

	// },[isAuthenticated,card])

	const loginHandler = () => {
		navigate('/login')
	}

	const handleClick = e => {
		e.preventDefault()

		document
			.getElementsByClassName('header-dropDown')[0]
			.classList.toggle('header-dropDown-show')
	}

	const showCardToggleHandler = () => {
		props.showCardToggleHandler()
	}
	//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	//   useEffect(() => {
	//     function handleResize(e) {

	//       setWindowDimensions(getWindowDimensions());
	//     }

	//     window.addEventListener('resize', handleResize);
	//     return () => window.removeEventListener('resize', handleResize);
	//   }, [windowDimensions]);

	const listOpenHandler = e => {
		e.preventDefault()
		if (settingIsOpen) {
			setSettingIsOpen(current => !current)
		}
		setIsOpen(current => !current)
	}

	const humbergurGHandleClick = e => {
		e.preventDefault()
		setIsOpen(current => !current)
		setSettingIsOpen(current => !current)
	}

	const profileHandler = e => {
		e.preventDefault()
		setIsOpen(false)
		setSettingIsOpen(false)
		navigate('/profile')
	}
	// serach
	const handleChange = e => {
		setQuery(e.target.value)
		props.searchHandler(e.target.value)
	}

	// click catch
	const clickHandler = e => {
		e.preventDefault()
		setSearchClicked(true)
		props.clickHandler(true)
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setSearchClicked(false)
				props.clickHandler(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])

	//Arrow hadler
	const arrowHandler = e => {
		e.preventDefault()
		navigate('/searched',{state:query})
    setSearchClicked(false)

    // navigate("/new-page", { state: { myData: "Hello World!" } });
    // const myData = location.state.myData;
	}
	// return <header className="headroom headroom--pinned header-nav">
	return (
		<header className="header-nav">
			<div className="router-list">
				<Link to="/">Home</Link>
			</div>
			{/* <i class="fas fa-eye" id="show_eye"></i>
			<i class="fas fa-eye-slash d-none" id="hide_eye"></i> */}
			<div className="input-group" ref={ref}>
				<input
					type="text"
					className="search-box"
					value={query}
					placeholder="Search easy shop"
					onChange={handleChange}
					onClick={clickHandler}
				/>
				{props.queryLength > 0 && (
					<img
						src={rightArrow}
						className="right-arrow"
						alt="right-arrow"
						onClick={arrowHandler}
					/>
				)}
			</div>
			<div className="header-buttons">
				{isAuthenticated && (
					<div className="header-card-btn" onClick={showCardToggleHandler}>
						<img src={cartImage} alt="" />
						<span className="card-value">{card?.length}</span>
					</div>
				)}
				{isAuthenticated && (
					<img
						className="header-notification-logo"
						src={notificationLogo}
						alt=""
					/>
				)}
				{isAuthenticated && (
					<img
						className="header-profile-hover-setting"
						onClick={handleClick}
						src={settingHover}
						alt=""
					/>
				)}
				{!isAuthenticated && (
					<img
						className="header-profile-logo"
						src={loginBtn}
						alt=""
						onClick={loginHandler}
					/>
				)}
				<div className="header-dropDown">
					<ul className="header-dropDown-ul">
						<Link to="/profile">Profile</Link>
						<Link to="/setting">Setting</Link>
						<a onClick={logoutHandler}>Logout</a>
					</ul>
				</div>
			</div>

			{isAuthenticated && (
				<img
					className="header-humberger-btn"
					src={burgerBtn}
					alt=""
					onClick={listOpenHandler}
				/>
			)}

			{isOpen && isAuthenticated && (
				<ul className="menu-list">
					<li>
						{isAuthenticated && (
							<img
								className="header-notification-logo"
								src={notificationLogo}
								alt=""
							/>
						)}
					</li>
					<li>
						{' '}
						{isAuthenticated && (
							<img
								className="header-profile-hover-setting"
								onClick={humbergurGHandleClick}
								src={settingHover}
								alt=""
							/>
						)}
					</li>
				</ul>
			)}

			{isOpen && !settingIsOpen && !isAuthenticated && (
				<ul className="menu-list">
					<li>
						{' '}
						{!isAuthenticated && (
							<img
								className="header-profile-logo"
								src={loginBtn}
								alt=""
								onClick={loginHandler}
							/>
						)}
					</li>
				</ul>
			)}

			{settingIsOpen && !isOpen && isAuthenticated && (
				<div className="setting-list">
					<a to="/profile" onClick={profileHandler}>
						Profile
					</a>
					<a to="/setting" onClick={humbergurGHandleClick}>
						Setting
					</a>
					<a onClick={logoutHandler}>Logout</a>
				</div>
			)}
		</header>
	)
}

export default Header
