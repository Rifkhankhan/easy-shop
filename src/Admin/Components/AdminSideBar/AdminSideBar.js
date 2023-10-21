/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import './AdminSideBar.css'
import {Link, Navigate, useNavigate} from 'react-router-dom'

const AdminSideBar = () => {

    const handleClick = (e) => {
        e.preventDefault()

        // console.log(e.currentTarget.className); //useState
        // ref.current.className // ref
         // 👇️ toggle class on click
        // event.currentTarget.classList.toggle('bg-salmon');

        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');

        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
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

  return  <div className="admin-sidebar-container">
 
    <nav className="admin-sidebar" >
        <div className="app-heading">Home Delivery</div>
        {/* <div className="sidebar-btn" onClick={handleClick}></div> */}
        <ul className="admin-sidebar-ul">
            <li><Link >Dashboard</Link></li>
            <li>
                <Link to='/admin-shop' className="shop-btn" onClick={handleClick}>Shops</Link>
                <ul className="admin-sidebar-ul-ul shop-ul">
                    <li><Link  to='/admin-shop' >Shops</Link></li>
                    <li><Link to='/create-shop'>Create Shop</Link></li>
                </ul>
            </li>
            <li>
                <Link  className="fruit-btn"  onClick={handleClick}>Fruits</Link>
                <ul className=" admin-sidebar-ul-ul fruit-ul">
                    <li><Link to='/admin-fruit'>Fruits</Link></li>
                    <li><Link to='/create-fruit'>Create fruit</Link></li>
                </ul>
            </li>
            <li>
                <Link className="phone-btn" onClick={handleClick}>Phones</Link> 
                <ul className=" admin-sidebar-ul-ul phone-ul">
                    <li><Link to='/admin-phone'>Phones</Link></li>
                    <li><Link to='/create-phone'>Create Phone</Link></li>
                </ul>
            </li>

            <li>
                <Link to='/admin-pending'>Pending List</Link>
            </li>

            <li>
                <Link to='/admin-processing'>Processing List</Link>
            </li>

            <li>
                <Link to='/admin-cancel'>Cancel List</Link>
            </li>

            <li>
                <Link to='/admin-return'>Return List</Link>
            </li>
        </ul>
    </nav>

  </div>
 
  
};

export default AdminSideBar;
