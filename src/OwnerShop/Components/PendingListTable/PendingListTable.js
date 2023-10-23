import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { acceptBuyProduct, getPendingProducts } from "../../../Actions/FruitAction";
import './PendingListTable.css'
import LoadingModel from "../LoadingModel/LoadingModel";

const PendingListTable = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product.pending)
  const authData = useSelector(state => state.auth.authData)

  useEffect(() => {
      dispatch(getPendingProducts())
  },[])

  
  const acceptHandler = (id,pId) => {
    dispatch(acceptBuyProduct(id,{userId:authData._id,productId:pId}))
  }
  const rejectHandler = (id) => {
    console.log(id);

  }
  
  return <div className="admin-pending-table-container">
      <table className="pending-table">
        <tr>
          <th>No</th>
          <th>User Name</th>
          <th>Product Name</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>

        {products && products.map(product => (
              <tr key={product.id}>
                <td>1</td>
                <td>{product.user.name}</td>
                <td>{product.product.name}</td>
                <td>{product.count}</td>
                <td className="btn-div">
                  <button type="button" onClick={() => acceptHandler(product.id,product.product._id)}>Accept</button>
                  <button type="button" onClick={() => rejectHandler(product.id)}>Reject</button>
                </td>
              </tr>
        ))}
       
 
      
       
      </table>
  </div>;
};

export default PendingListTable;
