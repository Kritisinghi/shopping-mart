import React from "react";
import { useSelector } from "react-redux";

import CartItem from "components/CartItem";
import "./style.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

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
          <p> Subtotal {cartItems.length} items</p>
          <p> $ {cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
        </div>
        <div className="cart-check-btn">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
