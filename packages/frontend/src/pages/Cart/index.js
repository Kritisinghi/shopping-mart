import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";

import CartItem from "components/CartItem";
import "./style.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [price,setPrice]=useState(0)
  useEffect(()=>{
    setPrice(cartItems.map((item)=>item.price*item.quantity).reduce((acc, item) => acc + item, 0));
  },[cartItems])
  return (
    <div className="cart">
      <div className="cart-left">
        <h2>Shopping Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => <CartItem item={item} key={i} />)
        ) : (
          <h2>Cart is Empty</h2>
        )}
      </div>
      <div className="cart-right">
        <div className="cart-info">
          <div className="cart-info-price-header">Price Details ({cartItems.length} Items)</div>
          <div className="cart-info-summary">
            <div className="cart-price-row">
              <span>Total MRP</span>
              <span>$ {price}</span>
            </div>
            <div className="cart-price-row">
              <span>Discount on MRP</span>
              <span>$ 0</span>
            </div>
            <div className="cart-price-total-row">
              <span>Total Amount</span>
              <span>$ {cartItems.reduce((acc, item) => acc + item.price, 0)}</span>
            </div>
          </div>
          <p> </p>
        </div>
        <div className="cart-check-btn">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
