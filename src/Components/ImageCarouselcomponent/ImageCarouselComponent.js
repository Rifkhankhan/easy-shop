import React from 'react'
import './ImageCarouselComponents.css'
import image1 from '../../images/CarouselImages/alexandra-tran-_ieSbbgr3_I-unsplash.jpg'
import image2 from '../../images/CarouselImages/vinicius-amnx-amano-jf15-wy_Mow-unsplash.jpg'
import image4 from '../../images/CarouselImages/karly-jones-4i9ef6xU738-unsplash.jpg'
import image5 from '../../images/CarouselImages/tamas-pap-UD_hXnHe5ZI-unsplash.jpg'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageCarouselComponent() {

  const settings = {
    infinite: true,
    dots: true ,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
   
  };
    const images = [{
      id: 1,
      src: image1,
      alt: "Image 1"
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2 "
    },
    {
      id: 3,
      src: image4,
      alt: "Image 3"
    },
    {
      id: 4,
      src: image5,
      alt: "Image 4"
    }
    ];
  return (<div className='imageCarouselComponent-container'>
     <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img className='imageCarouselComponent-container-image' src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
  </div>);
  
}

export default ImageCarouselComponent
