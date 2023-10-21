import React from 'react'
import FruitsComponent from '../../Components/FruitsComponent/FruitsComponent'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import './Fruit.css'

const Fruit = () => {
	return (
		<div className="admin-fruit-page">
			<AdminSideBar />
			<FruitsComponent />
		</div>
	)
}

export default Fruit
