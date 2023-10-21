import React, { useEffect } from "react";
import './ShopDetails.css'
import shops from "../../../Products/Shop";
import phones from "../../../Products/Phone";
import clothes from "../../../Products/Clothes";
import toyes from "../../../Products/Toyes";
import fruits from "../../../Products/Fruits";

import ShopProductsListComponent from '../../../Components/Shop/ShopProductsListComponent/ShopProductsListComponent'
import ShopProductsCategoryComponent from '../../../Components/Shop/ShopProductsCategoryComponent/ShopProductsCategoryComponent'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {shopActions} from "../../../Redux/shopSlice";
import {getShop, getShops} from '../../../Actions/ShopAction'

const ShopDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const shop = useSelector(state => state.shop.shop)
    useEffect(() => {
     dispatch(getShop(id))
    },[id,dispatch])
    
    const products = phones.filter(phone => phone.shop.toString() === id)
    products.push(...clothes.filter(phone => phone.shop.toString() === id))
    products.push(...toyes.filter(phone => phone.shop.toString() === id))
    products.push(...fruits.filter(phone => phone.shop.toString() === id))

    return <div className="shop-details-container">
        <ShopProductsCategoryComponent shop={shop} products={products}/>
        <ShopProductsListComponent  shop={shop} products={products}/>
  </div>;
};

export default ShopDetails;
