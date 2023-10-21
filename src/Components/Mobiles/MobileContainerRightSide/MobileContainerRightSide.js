import React from 'react'
import ProductList from '../../ProductCard/ProductList'
import './MobileContainerRightSide.css'

function MobileContainerRightSide(props) {
  return <div className='mobile-container-right-side'>
        <ProductList products={props.products} />
    </div>
}

export default MobileContainerRightSide
