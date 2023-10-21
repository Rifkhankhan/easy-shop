/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import './ShopSideBar.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'

const ShopSideBar = () => {

    const handleClick = (e) => {
        e.preventDefault()

        if(e.currentTarget.classList.contains('shop-btn')){
           document.getElementsByClassName('shop-ul')[0].classList.toggle('shop-show');
           
        }

        if(e.currentTarget.classList.contains('fruit-btn')){
            document.getElementsByClassName('fruit-ul')[0].classList.toggle('fruit-show');
            
         }

         if(e.currentTarget.classList.contains('phone-btn')){
            document.getElementsByClassName('phone-ul')[0].classList.toggle('phone-show');
            
         }

        //  if(e.currentTarget.classList.contains('sidebar-btn')){
        //     document.getElementsByClassName('sidebar-btn')[0].classList.toggle('sidebar-btn-toggle');
        //     document.getElementsByClassName('admin-sidebar')[0].classList.toggle('admin-sidebar-hide');
            
        //  }

           // when show and hide sidebar change the width of admin Dashboard component
        //    document.getElementsByClassName('AdminDashboardComponent')[0].classList.toggle('AdminDashboardComponent-fullWidth-toggle');

    }

  return  <div className="shop-sidebar-container">
 
    <nav className="shop-sidebar" >
        <div className="app-heading">Home Delivery</div>
        {/* <div className="sidebar-btn" onClick={handleClick}></div> */}
        <ul className="shop-sidebar-ul">
            <li><Link >Dashboard</Link></li>
            <li>
                <Link  className="shop-btn" onClick={handleClick}>Products</Link>
                <ul className="shop-sidebar-ul-ul shop-ul">
                    <li><Link  to='/shop-products' >Products</Link></li>
                    <li><Link to='/create-shop-product'>New Product</Link></li>
                </ul>
            </li>

            <li>
                <Link to='/shop-orders'>Orders</Link>
            </li>

            <li>
                <Link to='/shop-wishes'>Wishes</Link>
            </li>

            <li>
                <Link to='/shop-cancel'>Cancel List</Link>
            </li>

            <li>
                <Link to='/shop-return'>Return List</Link>
            </li>

            <li>
                <Link to='/shop-subscribe'>Subscribe Users</Link>
            </li>

            
        </ul>
    </nav>

  </div>
 
  
};

export default ShopSideBar;
