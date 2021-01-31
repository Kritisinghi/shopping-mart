import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Navbar = ({ click, qty }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Sun Computer</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/cart" className="cart-link">
            <i className="fa fa-shopping-bag">
              <span className="cart-badge">{qty}</span>
            </i>
            <span>Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger-menu" role="presentation" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
