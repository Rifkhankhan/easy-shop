import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../Actions/ProductAction";
import ItemList from "../../Components/Item/ItemList";

const SearchedProducts = () => {
    const location = useLocation()
    const query = location.state
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    const filterProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    console.log(filterProducts);

  return <div className="fruit-container">
    <ItemList shops={filterProducts} />
  </div>;
};

export default SearchedProducts;
