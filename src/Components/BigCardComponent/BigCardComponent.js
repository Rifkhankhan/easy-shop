import React from 'react'
import BigCard from '../../Components/BigCard/BigCard'
import shopimage from '../../images/shops/shop2.jpg'
import fruitsimage from '../../images/Fruits/apple1.jfif'

import image2 from '../../images/CarouselImages/jack-ward-yU9TNvk_jI8-unsplash.jpg'
import image3 from '../../images/CarouselImages/karly-jones-4i9ef6xU738-unsplash.jpg'
import image4 from '../../images/CarouselImages/pepi-stojanovski-tulxmkTXmRw-unsplash.jpg'
import image5 from '../../images/CarouselImages/tamas-pap-UD_hXnHe5ZI-unsplash.jpg'
import image6 from '../../images/CarouselImages/kiran-ck-cJ8YB0InG6k-unsplash.jpg'
import mobile from '../../images/hardik-sharma-CrPAvN29Nhs-unsplash.jpg'
import meals from '../../images/meals.jpeg'

import { useNavigate } from 'react-router-dom'


import styles from '../BigCardComponent/BigCardComponent.module.css'


function BigCardComponent() {
  const navigate = useNavigate();

    const clickHandler = (title) => {
        navigate(`/${title}`)
      }
	return (
		<div className={styles.bigcardcomponent}>
			<BigCard title="Shops" image={shopimage} clickHandler={clickHandler} />
			<BigCard title="Fruits" image={fruitsimage} clickHandler={clickHandler} />
			<BigCard title="Clothes" image={image2} />
			<BigCard title="Meals" image={meals} clickHandler={clickHandler}/>
			<BigCard title="Toys" image={image3} />
			<BigCard title="Shoes" image={image4} />
			<BigCard title="Hardware Things" image={image5} />
			<BigCard title="Home Foods" image={image6} />
			<BigCard title="Mobiles" image={mobile} clickHandler={clickHandler} />
			<BigCard title="Bike Parts" image={mobile} />
			<BigCard title="Electrical Things" image={mobile} />
			<BigCard title="Hotel Foods" image={mobile} />
		</div>
	)
}

export default BigCardComponent
