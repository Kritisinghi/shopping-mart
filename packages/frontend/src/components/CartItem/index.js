import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {removeFromCart} from 'redux/actions'
import "./style.css";
const CartItem = ({item}) => {
  const dispatch=useDispatch();
  const removeItem=()=>{
    dispatch(removeFromCart(item._id))
  }
  return (
    <div className="cartItem">
      <div className="cartitem-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/products/${item._id}`} className="cartitem-name">
        <p> ${item.name}</p>
      </Link>
      <p className="cartitem-price">${item.price}</p>
      <select value={Number(item.quantity)}>
                  {Array.apply(null, { length: item.stock }).map((e, i) => (
                          <option value={i+1}>{i+1}</option>
                  ))
                  }
                    </select>
      <button className="cartitem-delete" onClick={removeItem}>
        <i className="fa fa-trash"></i>
      </button>
      </div>
  );
};

export default CartItem;
