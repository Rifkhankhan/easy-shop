import swal from 'sweetalert'
import * as FruitApi from '../API/FruitApi'
import { fruitActions } from '../Redux/fruitSlice'
import { productAction } from '../Redux/ProductSlice'
import { authActions } from '../Redux/authSlice'
// import {FruitUiActions} from '../Redux/UI Slice/Fruit-ui-slice';

export const updateFruit = (id, formData) => async dispatch => {
	try {
		const { data } = await FruitApi.updateFruit(id, formData)
	} catch (err) {
	}
}

export const getFruit = id => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	const { data } = await FruitApi.getFruit(id)
	
	dispatch(fruitActions.getFruit(data[0]))
	// dispatch(FruitUiActions.changeAsLoadingFinished())
}
export const pushImage = (id,formData) => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	console.log(id)
	const { data } = await FruitApi.pushImage(id,formData)
	console.log(data)
	dispatch(fruitActions.getFruit(data[0]))
	window.location.reload()

	// dispatch(FruitUiActions.changeAsLoadingFinished())
}

export const deleteImage = (id,formData) => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	const { data } = await FruitApi.deleteImage(id,formData)
	dispatch(fruitActions.getFruit(data[0]))
	window.location.reload()

	// dispatch(FruitUiActions.changeAsLoadingFinished())
}
export const deleteFruit = id => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	FruitApi.deleteFruit(id)
	// dispatch(FruitUiActions.changeAsLoadingFinished())
}

export const getFruits = () => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	try{
		const { data } = await FruitApi.getFruits()
		dispatch(fruitActions.replaceFruits(data))
	} catch(err) {
		console.log(err);
	}
	// dispatch(FruitUiActions.changeAsLoadingFinished())
}

export const getProducts = (type) => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	
	try{
		const { data } = await FruitApi.getProducts(type)
		console.log(data);
		dispatch(fruitActions.replaceFruits(data))
	} catch(err) {
		console.log(err);
	}
	// dispatch(FruitUiActions.changeAsLoadingFinished())
}
export const createFruit = formData => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	const data = await FruitApi.createFruit(formData)
	console.log(data)
	window.location.reload()

	// dispatch(FruitUiActions.changeAsLoadingFinished())
}

export const likeProduct = (id, uid) => async dispatch => {
	await FruitApi.likeProduct(id, uid)
}

export const buyProduct = formData => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())

	try {
		const data = await FruitApi.buyProduct(formData)
		dispatch(productAction.toggleLoadingSpinner())
		if (data.data.message) {
			swal('Successfully Added', 'Successfully added Now it is in process')
		} else {
			swal('Warning!', 'Something went wrong')
		}
	} catch (err) {
		swal(err.message)
	}

	// dispatch(FruitUiActions.changeAsLoadingFinished())
}

export const getPendingProducts = () => async dispatch => {
	try {
		const { data } = await FruitApi.getPendingProducts()
		dispatch(productAction.getPendingProductList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const acceptBuyProduct = (id, formData) => async dispatch => {
	
	try {
		dispatch(productAction.removeItemFromPending(id))
		dispatch(productAction.addItemIntoProcessing(id))
		const { data } = await FruitApi.acceptBuyProduct(id, formData)
		dispatch(productAction.getPendingProductList(data.products))
		dispatch(productAction.getProcessingList(data.processing))
		dispatch(authActions.getUserOrderList(data.userOrders))
	} catch (err) {
		swal(err.message)
	}
}

export const getOrders = uid => async dispatch => {
	try {
		const { data } = await FruitApi.getOrders(uid)
		dispatch(authActions.getUserOrderList(data.orders))
	} catch (err) {
		swal(err.message)
	}
}

export const getProcessingList = () => async dispatch => {
	try {
		const { data } = await FruitApi.getProcessingList()
		dispatch(productAction.getProcessingList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const finishProcessing = (id, formData) => async dispatch => {

	try {
		dispatch(productAction.removeItemFromProcessing(id))
		dispatch(productAction.addItemIntoShip(id))
		const { data } = await FruitApi.finishProcessing(id, formData)
		dispatch(productAction.getProcessingList(data.processing))
		dispatch(productAction.getShipList(data.ship))

	} catch (err) {
		swal(err.message)
	}
}

export const cancelOrder = (id, formData) => async dispatch => {
	// {
	//     "userId":"63ee420bae2cc935156c8e46",
	//     "productId":"63f203246b19e722ae4a7d1c"
	// }

	// ship:product.ship,processing:product.processing,
	// pending:product.pending,orders:userData.orders

	try {
		const { data } = await FruitApi.cancelOrder(id, formData)
		dispatch(productAction.getPendingProductList(data.pending))
		dispatch(authActions.getUserOrderList(data.orders))
		dispatch(productAction.getShipList(data.ship))
		dispatch(productAction.getProcessingList(data.processing))
	} catch (err) {
		swal(err.message)
	}
}

export const getCancelList = () => async dispatch => {
	try {
		const { data } = await FruitApi.getCancelList()
		dispatch(productAction.getCancelList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const getUserCancelList = uid => async dispatch => {
	try {
		const { data } = await FruitApi.getCancelList(uid)
		dispatch(authActions.getUserCancelList(data.products))
	} catch (err) {
		swal(err.message)
	}
}
export const getShipList = () => async dispatch => {
	try {
		const { data } = await FruitApi.getShipList()
		dispatch(productAction.getShipList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const getAllShipped = () => async dispatch => {
	try {
		const { data } = await FruitApi.getAllShipped()
		dispatch(productAction.getAllShippedList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const getUserShipped = uid => async dispatch => {
	try {
		const { data } = await FruitApi.getUserShipped(uid)
		dispatch(authActions.getUserShippedList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const getReturns = () => async dispatch => {
	try {
		const { data } = await FruitApi.getReturns()
		dispatch(productAction.getReturnsList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const getUserReturns = uid => async dispatch => {
	try {
		const { data } = await FruitApi.getUserReturns(uid)
		dispatch(authActions.getUserReturnsList(data.products))
	} catch (err) {
		swal(err.message)
	}
}

export const finishShipping = (id, formData) => async dispatch => {
	// ship:product.ship,orders:userData.orders,shipped:userData.shipped
	try {
		const { data } = await FruitApi.finishShipping(id, formData)
		dispatch(productAction.getShipList(data.ship))
		dispatch(authActions.getUserOrderList(data.orders))
		dispatch(authActions.getUserShippedList(data.shipped))
	} catch (err) {
		swal(err.message)
	}
}

export const returnProduct = (id, formData) => async dispatch => {
	try {
		const { data } = await FruitApi.returnProduct(id, formData)
		dispatch(authActions.getUserReturnsList(data.product))
	} catch (err) {
		swal(err.message)
	}
}
