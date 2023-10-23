import React from 'react'
import './ProductTable.css'
import { useNavigate } from 'react-router-dom'


const ProductTable = ({headers,products}) => {
    const navigate = useNavigate()

    const ViewProductHandler = (id) => {
        navigate(`/owner/products/${id}`)
        console.log(id);
    }
	return <table>
        <tr>
            {headers.map(header => <th>{header}</th>)}
        
        </tr>
        {
            products.map(product => <tr onClick={() => ViewProductHandler(product._id)}>
                <td>{products.indexOf(product)+1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.existence}</td>
                <td>{product.price}</td>
                <td>{product.image}</td>
                <td>{product.shopId}</td>
                <td>{product.salesCount}</td>
            </tr>)
        }

    </table>
}

export default ProductTable
