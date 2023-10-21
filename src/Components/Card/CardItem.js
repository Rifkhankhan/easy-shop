import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCardItem ,decreaseCardItem} from "../../Actions/userAction";
import './CardItem.css'
const CardItem = (props) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.authData)._id

    const increaseCardItemHandler = () => {
        dispatch(increaseCardItem(userId,props._id))
    }
    const decreaseCardItemHandler = () => {
        dispatch(decreaseCardItem(userId,props._id))
    }

    return <div className="card-item">
            <img src={props.images} className="card-image" alt="" />
            <h4>{props.name}</h4>
            <h4>{props.count}</h4>
            <div className="card-btns">
                <span onClick={increaseCardItemHandler}>+</span>
                <span onClick={decreaseCardItemHandler}>-</span>
            </div>
        </div>;
};

export default CardItem;
