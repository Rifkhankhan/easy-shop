import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from '../../Products/Users'
import './RegisterPage.css'
import {signUp} from '../../Actions/AuthAction'
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../API/AuthRequest";

const RegisterPage = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const isLoading = useSelector(state => state.authUi.isLoading)

    const [name,setName] = useState()  
    const [age,setAge] = useState()  
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    // const [formValid,setFormValid] = useState(false)  


    // useEffect(() => {
    //     setFormValid(nameValidate && ageValidate && emailState.valid && passwordState.valid)
    // },[nameValidate ,ageValidate,emailState.valid ,passwordState.valid])

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    
    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const emailHandler = (e) => {
      setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

     }

    const submitHandler = (e) => {
        e.preventDefault()
      
        if(email !== '' && password !== '' && name !== '' && age > 10) {
            dispatch(signUp({email:email,password:password,age:age,name:name}))
        }

        if(isAuthenticated) {
            console.log(isAuthenticated);
            navigate('/home')
        }
    }

  return <div className="login-page-container">
    <div className="login-page-container-leftSide"> </div>
    <div className="login-page-container-rightSide">
        <h2>Home Delivery</h2>
        <form onSubmit={submitHandler} className="login-page-form">
            <div className="form-group">
                <input type='text' placeholder="Enter Name" value={name}  onChange={nameHandler} />
               {/* {!nameValidate && <p className="input-feedback">Please Enter Valid Name</p>} */}
            </div>
            <div className="form-group">
                <input type='number' placeholder="Enter Age" value={age}  onChange={ageHandler} />
              {/* {!ageValidate && <p className="input-feedback">Please Enter Valid Age</p>} */}
            </div>
            <div className="form-group">
                <input type='email' placeholder="Enter Email" value={email}  onChange={emailHandler} />
                {/* {!emailState.valid &&  <p className="input-feedback">Please Enter Valid Email</p>} */}
            </div>

            <div className="form-group">
                <input type='password' placeholder="Enter Password" value={password}  onChange={passwordHandler} />
                {/* {!passwordState.valid && <p className="input-feedback">Please Enter Valid Password</p>} */}
            </div>
           {isLoading ? <button disabled={true}>Loading</button> : <button type="submit">Sign up</button>}
        </form>
    </div>
</div>
};


export default RegisterPage;
