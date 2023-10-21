import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getReturns } from "../../../Actions/FruitAction";
import './RetunsListTable.css'
const RetunsListTable = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product.returns)
  useEffect(() => {
      dispatch(getReturns())
  },[])

  console.log(products);
  const acceptHandler = (id) => {
    console.log(id);
  }
  const rejectHandler = (id) => {
    console.log(id);

  }
  
  return <div className="admin-return-table-container">
      <table className="return-table">
        <tr>
          <th>No</th>
          <th>User Name</th>
          <th>Product Name</th>
          <th>Count</th>
          <th>Actions</th>
        </tr>

        {/* {products && products.map(product => (
              <tr key={product.id}>
                <td>1</td>
                <td>{product.user.name}</td>
                <td>{product.product.name}</td>
                <td>{product.count}</td>
                <td className="btn-div">
                  <button type="button" onClick={() => acceptHandler(product.id)}>Accept</button>
                  <button type="button" onClick={() => rejectHandler(product.id)}>Reject</button>
                </td>
              </tr>
        ))} */}
       


      
       
      </table>
  </div>;
};

export default RetunsListTable;
