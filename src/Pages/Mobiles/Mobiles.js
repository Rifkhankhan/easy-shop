/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './Mobiles.css'
import MobileContainerLeftSide from '../../Components/Mobiles/MobileContainerLeftSide/MobileContainerLeftSide'
import MobileContainerRightSide from '../../Components/Mobiles/MobileContainerRightSide/MobileContainerRightSide'
import phones from '../../Products/Phone'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../Redux/authSlice'
const  Mobiles = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if(!!localStorage.getItem('user')){
  //     console.log(!!localStorage.getItem('user'));
  //     dispatch(authActions.autoLogin(!!localStorage.getItem('user')))
  //   }else{
  //     dispatch(authActions.autoLogin(!!localStorage.getItem('user')))
  //     navigate('/login')
  //   }
  // },[])

  return <div className="mobile-container">
        <MobileContainerLeftSide />
        <MobileContainerRightSide products={phones} />
    </div>
}

export default Mobiles
