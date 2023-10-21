import * as shopApi from '../API/ShopApis';
import {shopActions} from '../Redux/shopSlice';
import {shopUiActions} from '../Redux/UI Slice/shop-ui-slice';

export const updateShop = (id, formData) => async(dispatch) =>{
    // dispatch({type:"UPDATING_START"})
    try{
        const {data} = await shopApi.updateShop(id, formData);
        // dispatch({type:"UPDATING_SUCCESS", data: data})
    } catch (err) {
        // dispatch({type:"UPDATING_FAIL"})
    }
}

export const getShop = (id) => async(dispatch)=>{
    dispatch(shopUiActions.changeAsLoading())
    const {data} = await  shopApi.getShop(id)
    dispatch(shopActions.getShop(data[0]))
    dispatch(shopUiActions.changeAsLoadingFinished())
}

export const deleteShop = (id) => async(dispatch)=>{
    dispatch(shopUiActions.changeAsLoading())
    shopApi.deleteShop(id)
    dispatch(shopUiActions.changeAsLoadingFinished())

}

export const getShops = () => async(dispatch)=>{
    dispatch(shopUiActions.changeAsLoading())
    const {data} = await shopApi.getShops()
    dispatch(shopActions.replaceShops(data))
    dispatch(shopUiActions.changeAsLoadingFinished())

}

export const createShop = (formData) => async(dispatch)=>{
    dispatch(shopUiActions.changeAsLoading())
    const data = await shopApi.createShop(formData)
    console.log(data);
    dispatch(shopUiActions.changeAsLoadingFinished())
}
