import React, { useEffect, useState } from 'react'
import './Home.css'
import ImageCarouselComponent from '../../Components/ImageCarouselcomponent/ImageCarouselComponent'
import BookCarouselComponent from '../../Components/BookCorouselComponent/BookCorouselComponent'
import BigCard from '../../Components/BigCard/BigCard'

import shopimage from '../../images/shops/shop2.jpg'
import fruitsimage from '../../images/Fruits/apple1.jfif'
import image from '../../images/CarouselImages/alexandra-tran-_ieSbbgr3_I-unsplash.jpg'
import image1 from '../../images/CarouselImages/giorgio-trovato-7bw3REiKLI0-unsplash.jpg'
import image2 from '../../images/CarouselImages/jack-ward-yU9TNvk_jI8-unsplash.jpg'
import image3 from '../../images/CarouselImages/karly-jones-4i9ef6xU738-unsplash.jpg'
import image4 from '../../images/CarouselImages/pepi-stojanovski-tulxmkTXmRw-unsplash.jpg'
import image5 from '../../images/CarouselImages/tamas-pap-UD_hXnHe5ZI-unsplash.jpg'
import image6 from '../../images/CarouselImages/kiran-ck-cJ8YB0InG6k-unsplash.jpg'
import mobile from '../../images/hardik-sharma-CrPAvN29Nhs-unsplash.jpg'
import { useNavigate } from 'react-router-dom'
import BigCardComponent from '../../Components/BigCardComponent/BigCardComponent'

function Home() {
  const navigate = useNavigate();
	
  const clickHandler = (title) => {
    navigate(`/${title}`)
  }

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  // },[])
  return <div className='home-container'>
      <ImageCarouselComponent />
      <BigCardComponent />
      <BookCarouselComponent />
      <BookCarouselComponent />

      <div className='big-card-component'>
          <BigCard  title='Refresh your space' image={image}/>
          <BigCard  title='Dresses' image={image1}/>
          <BigCard  title='Beauty picks' image={image2}/>
          <BigCard  title='Gaming accessories' image={image3}/>
      </div>

      <BookCarouselComponent />
      <BookCarouselComponent />

      <div className='big-card-component'>
          <BigCard  title='Refresh your space' image={image}/>
          <BigCard  title='Dresses' image={image1}/>
          <BigCard  title='Beauty picks' image={image2}/>
          <BigCard  title='Gaming accessories' image={image3}/>
      </div>

      <BookCarouselComponent />
      <BookCarouselComponent />
      <BookCarouselComponent />
    </div>
}

export default Home
