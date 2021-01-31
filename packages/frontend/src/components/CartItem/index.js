import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "redux/actions";
import "./style.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(item._id));
  };
  console.log(item)
  return (
    <div className="cartItem">
      <div className="cartitem-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="cartitem-details">
        <div>
          <div className="cartitem-details-name"> {item.name}</div>
  <Link to={`/product/${item._id}`} className="cartitem-details-link">{item.description.length>80? item.description.substr(0,80)+"...":item.description}</Link>
      </div>
      <div className="cartitem-qty-size">
        <div className="cartitem-qty">
        Qty: <select value={Number(item.quantity)} disabled={true}>
          {Array.apply(null, { length: item.stock }).map((e, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        </div>
      </div>
      </div>
      
      <div className="cartitem-price-block">
        <div className="cartitem-price">$ {item.price * item.quantity}</div>
      </div>
      <div className="cartitem-action-block">
        <button className="cartitem-delete" onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
