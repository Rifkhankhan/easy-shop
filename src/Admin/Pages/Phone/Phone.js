import React, { useEffect } from 'react'
import PhonesComponent from '../../Components/PhonesComponent/PhonesComponent'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import './Phone.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../Actions/ProductAction'

const Phone = () => {

	const dispatch = useDispatch()
	const phones = useSelector(state => state.product.products)
	console.log(phones);
	useEffect(() => {
	  dispatch(getProducts('phones'))
	},[dispatch])

	return (
		<div className="admin-phone-page">
			<AdminSideBar />
			<PhonesComponent phones={phones}/>
		</div>
	)
}

export default Phone
