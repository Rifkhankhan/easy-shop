import React from 'react'
import './BookCorouselComponent.css'
import image1 from '../../images/CarouselImages/alexandra-tran-_ieSbbgr3_I-unsplash.jpg'
import image2 from '../../images/CarouselImages/vinicius-amnx-amano-jf15-wy_Mow-unsplash.jpg'
import image4 from '../../images/CarouselImages/karly-jones-4i9ef6xU738-unsplash.jpg'
import image5 from '../../images/CarouselImages/tamas-pap-UD_hXnHe5ZI-unsplash.jpg'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookCorouselComponent() {

  const settings = {
    infinite: true,
    dots: false ,
    slidesToShow: 8,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive:[
      {
        breakpoint:1290,
        settings:{
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:1210,
        settings:{
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:1100,
        settings:{
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:1025,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:950,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:910,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint:860,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
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
    },
    {
        id: 5,
        src: image1,
        alt: "Image 1"
      },
      {
        id: 6,
        src: image2,
        alt: "Image 2 "
      },
      {
        id: 7,
        src: image4,
        alt: "Image 3"
      },
      {
        id: 8,
        src: image5,
        alt: "Image 4"
      },{
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
      },
      {
          id: 5,
          src: image1,
          alt: "Image 1"
        },
        {
          id: 6,
          src: image2,
          alt: "Image 2 "
        },
        {
          id: 7,
          src: image4,
          alt: "Image 3"
        },
        {
          id: 8,
          src: image5,
          alt: "Image 4"
        },
    ];
  return <div className='bookCarouselComponent-container'>
    <h2>Top Sellers in Books for you</h2>
     <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img className='bookCarouselComponent-container-image' src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
  </div>;
  
}

export default BookCorouselComponent
