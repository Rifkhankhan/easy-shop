
import swal from 'sweetalert'
import * as ProductApi from '../API/ProductApi'
import { fruitActions } from '../Redux/fruitSlice'
import { productAction } from '../Redux/ProductSlice'
import { authActions } from '../Redux/authSlice'
// import {FruitUiActions} from '../Redux/UI Slice/Fruit-ui-slice';


export const getProducts = () => async dispatch => {
	
	try{
		const { data } = await ProductApi.getProducts()
		dispatch(productAction.fetchProducts(data))
	} catch(err) {
		console.log(err);
	}
	// dispatch(FruitUiActions.changeAsLoadingFinished())
}

export const createProduct = (formData) => async dispatch => {
	// dispatch(FruitUiActions.changeAsLoading())
	try{
		const { data } = await ProductApi.createProduct(formData)
		dispatch(productAction.fetchProducts(data))
	} catch(err) {
		console.log(err);
	}
	// dispatch(FruitUiActions.changeAsLoadingFinished())
}
