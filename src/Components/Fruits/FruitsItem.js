import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FruitsItem.css'
import heartWhite from '../../images/heartWhite.png'
import heartRed from '../../images/heartRed.png'
import { useDispatch, useSelector } from "react-redux";
import { likeProduct } from "../../Actions/FruitAction";
import {addToCard} from '../../Actions/userAction'
const FruitsItem = (props) => {
    console.log(props);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.authData)
    const shopDetailsHandler = () => {
        navigate(`/Fruits/${props.id}`)
    }
    const userId =user ?  user._id : ''
    const [like,setLike] = useState(props.product?.likes?.includes(userId) ? true : false)

    const likeBtnHandler = () => {
        setLike(current => !current)
        dispatch(likeProduct(props.id,userId))
    }

    const addToCardHandler = () =>{
        dispatch(addToCard(user._id,props._id))
    }
    // return <div className="fruit-card" onClick={() => shopDetailsHandler(props.product._id)}>
      return <div className="fruit-card">  
        
          <img src={props?.images} alt="" className="image" onClick={shopDetailsHandler}/>
          <img src={props?.images} alt="" className="image" />
          {!like && <img src={heartWhite} alt="" className="like-logo" onClick={likeBtnHandler}/>}
          {like && <img src={heartRed} alt="" className="like-logo" onClick={likeBtnHandler}/>}
          <div className="fruit-card-footer">
            <h3>{props?.name}</h3>
            <button type="button" onClick={addToCardHandler}>Add to card</button>
          </div>
      </div>;
};

export default FruitsItem;
