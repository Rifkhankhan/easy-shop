/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import './Profile.css'
import profile from '../../images/stefan-stefancik-QXevDflbl8A-unsplash.jpg'
import profileHover from '../../images/camera.jpg'
import FruitsList from "../../Components/Fruits/FruitsList";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, getCardList, getUserData, getWishList, uploadProfilePhoto } from "../../Actions/userAction";
import swal from "sweetalert";
import axios from "axios";
import { authActions } from "../../Redux/authSlice";
import { getCancelList, getOrders, getPendingProducts, 
  getProcessingList,
   getUserCancelList,
   getUserReturns, getUserShipped } from "../../Actions/FruitAction";

import LoadingModel from './../../Components/LoadingModel/LoadingModel'
const Profile = () => {
  const dispatch = useDispatch()
  const [wishList,setWishList] = useState()
  const myWish = useSelector(state => state.product.wish)
  const [previewSource, setPreviewSource] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const imageRef = useRef();
  const [fileInputState, setFileInputState] = useState("");
  const defaultHandler = useRef()
  // get datas from redux
  const authData = useSelector(state => state.auth.authData)
  const [loading,setLoading] = useState(authData === undefined ? true : false)
  const orders = useSelector(state => state.auth.orders);
  const returns = useSelector(state => state.auth.returns);
  const cancel = useSelector(state => state.auth.cancel);
  const shipped = useSelector(state => state.auth.shipped);
  const card = useSelector(state => state.auth.card);
  const wish = useSelector(state => state.auth.wish);
  const [products,setProducts] = useState(card)
  console.log(products);

  useEffect(() => {
    dispatch(getUserData(JSON.parse(localStorage.getItem('user'))?.token))
  },[dispatch])

  useEffect(() => {
    setLoading(authData === undefined ? true : false)

  },[authData])

   //handling the image uploading
   const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(event.target.value);
};

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
          setPreviewSource(profile);
          swal("Poof! Your profile photo has been deleted!", {
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
    document.getElementsByClassName('header-dropDown')[0].classList.remove('header-dropDown-show');
    defaultHandler.current.click()
  },[])
  

  const imageUploadHandler = async (e) => {
    e.preventDefault()
    let imageUrl;
    let id;

    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('upload_preset', 'homedelivery')
      
    try {
      await axios
        .post(
          'https://api.cloudinary.com/v1_1/homedelivery/image/upload',
          formData
        )
        .then(res => {
              
          imageUrl = res.data.secure_url
          id = res.data.public_id
        })
    } catch (error) {
      alert(error)
    }

    const data = {
      url:imageUrl,
      id:id
    }
    // console.log(data);
    dispatch(uploadProfilePhoto(authData._id,data))

  }

  const handler = (e) => {
    e.preventDefault()
    let siblingElements = document.querySelectorAll('.category-tool-bar-list');

    siblingElements.forEach(sibling => {
      sibling.classList.remove('activated');
    });


    e.currentTarget.classList.add('activated');

    if(e.target.innerText === 'Card') {
      setProducts(card)
    }
    else if(e.target.innerText === 'Wish') {
      setProducts(wish)
    }
    else if(e.target.innerText === 'Orders') {
      setProducts(orders)
    }
    // else if(e.target.innerText === 'Processing') {
    //   products = pr

    // }
    else if(e.target.innerText === 'Shipped') {
      setProducts(shipped)
    }
    else if(e.target.innerText === 'Cancel') {
      setProducts(cancel)


    }
    else if(e.target.innerText === 'Returns') {
      setProducts(returns)
    }
   
  }


  useEffect(()=>{},[products])

  return <div className="profile-container">
    {loading && <LoadingModel />}
    {authData && <div className="profile-information">
      <div className="profile-image-information">
        {previewSource ? (
          <img
          src={previewSource}
          alt="preview"
          className="profile-img"
          />
        ) :  <img className="profile-img" src={authData.profilePicture ? authData.profilePicture.url : profile}  alt="profile-image" />}
         
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
          {!previewSource && <button className="profile-image-information-btn1"  onClick={()=>imageRef?.current.click()}>Upload new photo</button>}
          {previewSource && <button className="profile-image-information-btn1"  onClick={imageUploadHandler}>Save</button>}
          <button className="profile-image-information-btn2" disabled={!authData?.profilePicture}>Delete photo</button>
      </div>
      <div className='line'></div>
      <div className="profile-information-data">
        <h2>Basic Info</h2>
        <div className="profile-basic-info-container">
            <div className="profile-basic-info-group">
              <h5>FIRST NAME</h5>
              <p>{authData?.name}</p>
            </div>
      
            <div className="profile-basic-info-group">
              <h5>EMAIL</h5>
              <p>{authData?.email}</p>
            </div>

            <div className="profile-basic-info-group">
              <h5>HOMEDELIVERY USERID</h5>
              <p>{authData?.homeDeliveryUserId}</p>
            </div>

            <div className="profile-basic-info-group">
              <h5>PROFILE POINTS</h5>
              <p>{authData?.profilePoints}</p>
            </div>

            <div className="profile-basic-info-group">
              <h5>AGE</h5>
              <p>{authData?.age}</p>
            </div>

            <div className="profile-basic-info-group">
              <h5>COUNTRY</h5>
              <p>{authData?.country ? authData?.country : "No Country"}</p>
            </div>

            <div className="profile-basic-info-group">
              <h5>ADDRESS</h5>
              <p>{authData?.address ? authData?.address : "No Address"}</p>
            </div>
            
            <div className="profile-basic-info-group">
              <h5>PHONE</h5>
              <p>{authData?.phone ? authData?.phone : "No Phone"}</p>
            </div>

            <div className="profile-basic-info-group">
              <h5>CITY</h5>
              <p>{authData?.city ? authData?.city : "No City"}</p>
            </div>

        </div>
      </div>
    </div>}

    <div className="category-tool-bar">
      <ul className="category-tool-bar-ul ">
        <li className="category-tool-bar-list category-tool-bar-card-list activated" ref={defaultHandler}  onClick={handler}>Card</li>
        <li className="category-tool-bar-list category-tool-bar-card-list"  onClick={handler}>Wish</li>
        <li className="category-tool-bar-list category-tool-bar-card-list"  onClick={handler}>Orders</li>
        <li className="category-tool-bar-list category-tool-bar-card-list"  onClick={handler}>Processing</li>
        <li className="category-tool-bar-list category-tool-bar-card-list"  onClick={handler}>Shipped</li>
        <li className="category-tool-bar-list category-tool-bar-card-list" onClick={handler}>Cancel</li>
        <li className="category-tool-bar-list category-tool-bar-card-list"  onClick={handler}>Returns</li>
      </ul>
    
    </div>
    { products?.length > 0 &&  <div className="profile-card-list">
      <div className="profile-card-list-container">
          <FruitsList shops={products} />
      </div>
    
    </div>}
    {products?.length === 0 && <p className="profile-card-list">There is no Produts</p>}
  </div>;
};

export default Profile;
