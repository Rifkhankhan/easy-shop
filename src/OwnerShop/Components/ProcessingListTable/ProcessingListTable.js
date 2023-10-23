import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  finishProcessing, getProcessingList } from "../../../Actions/FruitAction";

import './ProcessingListTable.css'
const ProcessingListTable = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product.processing)
  const authData = useSelector(state => state.auth.authData)
  
  useEffect(() => {
      dispatch(getProcessingList())
  },[])

  
  const acceptHandler = (id,pId) => {
    dispatch(finishProcessing(id,{userId:authData._id,productId:pId}))

  }
  const rejectHandler = (id) => {
    console.log(id);

  }
  
  return <div className="admin-processing-table-container">
      <table className="processing-table">
        <tr>
          <th>No</th>
          <th>User Name</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>

        {products && products.map(product => (
              <tr key={product.id}>
                <td>1</td>
                <td>{product.user.name}</td>
                <td>{product.product.name}</td>
                <td>{product.product.price}</td>
                <td>{product.count}</td>
                <td>{product.product.price * product.count}</td>
                <td className="btn-div">
                  <button type="button" onClick={() => acceptHandler(product.id,product.product._id)}>Accept</button>
                  <button type="button" onClick={() => rejectHandler(product.id)}>Reject</button>
                </td>
              </tr>
        ))}
       


      
       
      </table>
  </div>;
};

export default ProcessingListTable;
