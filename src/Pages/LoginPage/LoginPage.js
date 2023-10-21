import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'
import users from '../../Products/Users'
import {logIn} from '../../Actions/AuthAction'

import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const isLoading = useSelector(state => state.authUi.isLoading)
    const emailHandler = (e) => {
      setEmail(e.target.value)
    }

    useEffect(() => {
      if(isAuthenticated){
        navigate('/home')
      }
    },[isAuthenticated])

    const passwordHandler = (e) => {
       setPassword(e.target.value)
     }

     const submitHandler = (e) => {
        e.preventDefault()
      
        if(email !== '' && password !== '')
        {
          dispatch(logIn({email:email,password:password}))
        }

    }



  return <div className="login-page-container">
    <div className="login-page-container-leftSide"> </div>
    <div className="login-page-container-rightSide">
        <h2>Home Delivery</h2>
        <form onSubmit={submitHandler} className="login-page-form">
        
            <div className="form-group">
                <input type='email' placeholder="Enter Email" value={email}  onChange={emailHandler} required />
                {/* {!emailState.valid &&  <p className="input-feedback">Please Enter Valid Email</p>} */}
            </div>

            <div className="form-group">
                <input type='password' placeholder="Enter Password" value={password}  onChange={passwordHandler} />
                {/* {!passwordState.valid && <p className="input-feedback">Please Enter Valid Password</p>} */}
            </div>
            {isLoading ? <button type="submit">Logging</button> : <button type="submit">Submit</button>}
        </form>
    </div>
</div>
};

export default LoginPage;
