import React from "react";
import "./style.css";
import CartItem from 'components/CartItem'
import {useDispatch,useSelector} from 'react-redux'
const Cart = () => {
  const dispatch=useDispatch();
  const {cartItems}= useSelector((state)=>state.cart)

  return(
    <div className="cart">
      <div className="cart-left">
        <h2>Shopping Cart</h2>
        { cartItems.length > 0 ?
          (cartItems.map((item)=><CartItem item={item} />)) : (<h2>Cart is Empty</h2>)
        }
      </div>
      <div className="cart-right">
        <div className="cart-info">
          <p> Subtotal (0) items</p>
          <p> $499</p>
        </div>
        <div className="cart-check-btn">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
};

export default Cart;
