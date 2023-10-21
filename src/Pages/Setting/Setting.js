/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import './Setting.css'
import setting from '../../images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'
import settingHover from '../../images/camera.jpg'
import FruitsList from "../../Components/Fruits/FruitsList";
import { useDispatch, useSelector } from "react-redux";
import { getWishList, updateUser, uploadProfilePhoto , } from "../../Actions/userAction";
import swal from "sweetalert";
import axios from "axios";
import { authActions } from "../../Redux/authSlice";

const Setting = () => {
  const dispatch = useDispatch()
  const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).result : null
  const [wishList,setWishList] = useState()
  const myWish = useSelector(state => state.product.wish)
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const imageRef = useRef();
  const [fileInputState, setFileInputState] = useState("");
  const [formData, setFormData] = useState(userData);

   //handling the image uploading
   const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(event.target.value);
};

const handleChange = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value})
}
const deletePhoto = async(e) => {
  e.preventDefault();
  swal({
      title: "Are you sure want to delete?",
      text: "Anytime you can add photo again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async(willDelete) => {
      if (willDelete) {
          setPreviewSource(setting);
          swal("Poof! Your setting photo has been deleted!", {
              icon: "success",
            });
      } else {
        swal("Your post is safe!");
      }
    });

  
}

//display a preview of uploaded image
const previewFile = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setPreviewSource(reader.result);
  };
};

  useEffect(() => {
    dispatch(getWishList(userData._id))
  },[dispatch])

  useEffect(() => {
    document.getElementsByClassName('header-dropDown')[0].classList.remove('header-dropDown-show');
  },[])
  
  useEffect(() => {

  },[])

  const resetHandler = (e) => {
    e.preventDefault()

  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUser(userData._id,formData))
  }


  return <div className="setting-container">
    <div className="setting-information">
      <div className="setting-image-information">
        {previewSource ? (
          <img
          src={previewSource}
          alt="preview"
          className="setting-img"
          />
        ) :  <img className="setting-img" src={userData.profilePicture ? userData.profilePicture.url : setting}  alt="setting-image" />}
         
          <div className="display-div" style={{ display: 'none' }}>
                        <input 
                        type="file" 
                        name="image" 
                        ref={imageRef} 
                        onChange={handleFileInputChange}
                        value={fileInputState}
                        accept="image/png, image/jpeg"
                        />

                    </div>
        
      </div>
      <div className='line'></div>
      <div className="setting-information-data">
            <form onSubmit={submitHandler}>
            <h2>Update Info</h2>
            <div className="setting-basic-info-container">
            <div className="setting-basic-info-group">
              <h5>NAME</h5>
              <input  name='name' onChange={handleChange}   defaultValue={formData && formData.name ? formData.name : ""}/>
            </div>
           
            <div className="setting-basic-info-group">
              <h5>EMAIL</h5>
              <input value={userData.email} type='email' name='email' onChange={handleChange}  defaultValue={formData && formData.email ? formData.email : ""}/>
            </div>
            <div className="setting-basic-info-group">
              <h5>NEW PASSWORD</h5>
              <input placeholder="Enter new Password" type='password' name="password" onChange={handleChange} />
            </div>

            <div className="setting-basic-info-group">
              <h5>AGE</h5>
              <input  name='age' type='number' onChange={handleChange}   defaultValue={formData && formData.age ? formData.age : ""}/>
            </div>

            <div className="setting-basic-info-group">
              <h5>COUNTRY</h5>
              <input  type='text'  name='country' placeholder={!userData.country ? "Enter Your Country" : ''} defaultValue={ formData && formData.country ? formData.country : ""}   onChange={handleChange} />
            </div>

            <div className="setting-basic-info-group">
              <h5>ADDRESS</h5>
              <input  type='text' name='address'  placeholder={!userData.address ? "Enter Your Address" : ''} defaultValue={ formData && formData.address ? formData.address : ""} onChange={handleChange} /> 
            </div>
            
            <div className="setting-basic-info-group">
              <h5>PHONE</h5>
              <input  type='number' name='phone'  placeholder={!userData.phone ? "Enter Your Phone" : ''} defaultValue={ formData && formData.phone ? formData.phone : ""} onChange={handleChange} />
            </div>

            <div className="setting-basic-info-group">
              <h5>CITY</h5>
              <input  type='text' name='city'  placeholder={!userData.city ? "Enter Your City" : ''} defaultValue={ formData && formData.city ? formData.city : ""} onChange={handleChange} />
            </div>

            <div className="setting-basic-info-group">
              <h5>BIO</h5>
              <input  type='text'  name='bio'  placeholder={!userData.bio ? "Enter Your Bio" : ''} defaultValue={ formData && formData.bio ? formData.bio : ""} onChange={handleChange} />
            </div>
        </div>
        <div className="setting-information-data-btns">
            <button type="submit">Update</button>
            {/* <button type="button" onClick={resetHandler}>Reset</button> */}
        </div>
            </form>
       </div>
    </div>

  </div>;
};

export default Setting;
