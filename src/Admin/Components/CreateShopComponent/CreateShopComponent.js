import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createShop } from "../../../Actions/ShopAction";
import { imageUpload } from "../../../API/ShopApis";
import ImageUploader from "../ImageUploader/ImageUploader";
import './CreateShopComponent.css'

const CreateShopComponent = () => {
    const navigate = useNavigate()
	const [name,setName] = useState()
	const [address,setAddress] = useState()
	const [area,setArea] = useState()
	const [owner,setOwner] = useState()
    const [validation, setValidation] = useState(false);
    const dispatch = useDispatch()
	const [selectedFile, setSelectedFile] = useState()
    const isLoading = useSelector(state => state.shopUi.isLoading)
   

    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const addressHandler = (e) => {
        setAddress(e.target.value)

    }
    const areaHandler = (e) => {
        setArea(e.target.value)

    }

    const ownerHandler = (e) => {
        setOwner(e.target.value)
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault()
       
        let image
		const formData = new FormData()
		formData.append('file', selectedFile)
        formData.append('fileName', selectedFile.name);
		formData.append('upload_preset', 'homedelivery')
      
		try {
			await axios
				.post(
					'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
					formData
				)
				.then(res => {
             
					image = res.data.secure_url
				})
		} catch (error) {
			alert(error)
		}

        dispatch(createShop({name:name,address:address,owner:owner,area:area,image:image}))
        window.location.reload()
    }

    const catchFileDataHandler = e => {
		// if (e.name === '') {
		// 	setImageValidate(false)
		// } else {
		// 	setImageValidate(true)
		// 	setSelectedFile(e)
		// }
			setSelectedFile(e)

	}

    // const checkValidation = () => {
    //     let errors = validation;
       
    
    //     //  if (data.password.length < 8) {
    //     //   setPasswordError(false)
    //     // } else if (data.password.length >= 20) {
    //     //     setPasswordError(false)
    //     // } else {
    //     //     setPasswordError(true)
    //     // }
     
    //     // if(data.password !== data.confirmPassword) {
    //     //     setConfirmPassword(false)
    //     // } else if (data.password === data.confirmPassword) {
    //     //     setConfirmPassword(true)
    //     // }
    
    //     setValidation(errors);
    //   };

    //   useEffect(() => {
    //     checkValidation();
    //   }, [data]);

    const fileHandler = () => { }


  return <div className="CreateShopComponent">
        <div className="CreateShopComponent-form-container">
            <div className="CreateShopComponent-heading">Create new Shop</div>
            <form onSubmit={formSubmitHandler} className="CreateShopComponent-form" >
                <div className="CreateShopComponent-form-group">
                    <label>Shop Name</label>
                    <input type='text' defaultValue={name} onChange={nameHandler}  placeholder="Enter Shop Name"></input>
                </div>

                <div className="CreateShopComponent-form-group">
                    <label>Shop Address</label>
                    <textarea defaultValue={address}  onChange={addressHandler}></textarea>
                </div>

                <div className="CreateShopComponent-form-group">
                    <label>Shop Area</label>
                    <input type='text' defaultValue={area} onChange={areaHandler} placeholder="Enter Shop Area"></input>

                </div>

                <div className="CreateShopComponent-form-group">
                    <label>Shop Owner</label>
                    <input type='text' defaultValue={owner} onChange={ownerHandler} placeholder="Enter Shop Owner"></input>

                </div>

                
                <div className="CreateShopComponent-form-group">
                    <label>Shop Image</label>
                    <ImageUploader onInput={catchFileDataHandler} />
					
                </div>

                   
                <div className="CreateShopComponent-form-btn">
                   {(isLoading) ?  <button type='submit' disabled={true} className="submit-btn loading-btn">Loading</button> : <button type='submit'className="submit-btn notLoading-btn" >Submit</button>}
                </div>
            </form>
        </div>
        <div className="CreateShopComponent-image"></div>
  </div>;
};

export default CreateShopComponent;
