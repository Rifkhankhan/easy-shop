import React, { useEffect } from "react";
import ShopList from "../../../Components/Shop/ShopList";
import './ShopsComponent.css'
import { useDispatch,useSelector } from "react-redux";
import { getShops } from "../../../Actions/ShopAction";
const ShopsComponent = () => {
  const dispatch = useDispatch()

  const shops = useSelector(state => state.shop.shops)
  useEffect(() => {
      dispatch(getShops())
  },[])
  return <div className="Admin-ShopsComponent">
      <ShopList shops={shops} />
  </div>;
};

export default ShopsComponent;
