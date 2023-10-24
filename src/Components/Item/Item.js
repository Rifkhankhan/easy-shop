import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Item.module.css'
import heartWhite from '../../images/heartWhite.png'
import heartRed from '../../images/heartRed.png'
import { useDispatch, useSelector } from 'react-redux'
import { likeProduct } from '../../Actions/FruitAction'
import { addToCard } from '../../Actions/userAction'
const Item = props => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector(state => state.auth.authData)
	const userId = user ? user._id : ''
	const [like, setLike] = useState(props.likes.includes(userId) ? true : false)
	console.log(props.likes.includes(userId))

	const shopDetailsHandler = () => {
		navigate(`/Fruits/${props._id}`)
	}

	const likeBtnHandler = () => {
		setLike(current => !current)
		dispatch(likeProduct(props._id, userId))
	}

	const addToCardHandler = () => {
		dispatch(addToCard(userId, props))
	}

	return (
		<div className={styles.fruitcard}>
			<img
				src={props.images[0]}
				alt=""
				className={styles.image}
				onClick={shopDetailsHandler}
			/>
			{!like && (
				<img
					src={heartWhite}
					alt=""
					className={styles.likelogo}
					onClick={likeBtnHandler}
				/>
			)}
			{like && (
				<img
					src={heartRed}
					alt=""
					className={styles.likelogo}
					onClick={likeBtnHandler}
				/>
			)}
			<div className={styles.fruitcardfooter}>
				<h3>{props.name}</h3>
				<button type="button" onClick={addToCardHandler}>
					Add to card
				</button>
			</div>
		</div>
	)
}

export default Item
