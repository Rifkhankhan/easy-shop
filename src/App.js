import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import RightSideCardComponent from './Components/rightSideCardComponent/RightSideCardComponent'
import NetflixSearchComponent from './Components/NetFlixSearchComponent/NetFlixSearchComponent'
import Routers from './routers/Routers'
import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from './Actions/ProductAction'

function App() {
	// const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const [showCard, setShowCard] = useState(false)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const [query, setQuery] = useState('')
	const [searchItems, setSearchItems] = useState()
	const products = useSelector(state => state.product.products)
	const [model, setModel] = useState(false)
	const dispatch = useDispatch()
	const [searcClick, setSearchClicked] = useState(false)

	useEffect(() => {
		return () => {
			document.documentElement.style.overflow = 'scroll'
			document.body.scroll = 'yes'
			setModel(false)
		}
	}, [])

	useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])

	const searchHandler = e => {
		setQuery(e)
		setSearchItems(
			products.filter(item => item.name.toLowerCase().includes(e.toLowerCase()))
		)
	}

	useEffect(() => {}, [query])

	const showCardToggleHandler = () => {
		setShowCard(current => !current)
	}
	// console.log(window.innerWidth)

	// click handler
	const clickHandler = e => {
		setSearchClicked(e)
	}
	return (
		<div className="app">
			<BrowserRouter>
				<Header
					searchHandler={searchHandler}
					showCardToggleHandler={showCardToggleHandler}
					clickHandler={clickHandler}
					queryLength={query.length}
					query = {query}
					searcClick={searcClick}
				/>
				{showCard && isAuthenticated && <RightSideCardComponent />}
				{/* <Header sideBarBtnHandler = {sideBarBtnHandler} showSideBar={showSideBar}/> */}

				{/* {showSideBar && <SideBar  sideBarBtnHandler = {sideBarBtnHandler} showSideBar={showSideBar} />} */}
				{query.length === 0 && !searcClick && (
					<Routers searcClick={searcClick} />
				)}
				{query.length === 0 && searcClick && (
					<Routers searcClick={searcClick} />
				)}
				{query.length > 0 && searcClick && (
					<NetflixSearchComponent items={searchItems} />
				)}
				{query.length > 0 && !searcClick && <Routers searcClick={searcClick} />}
			</BrowserRouter>
		</div>
	)
}

export default App
