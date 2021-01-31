import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SideDrawer = ({ show, qty }) => {
  const sideDrawerClass = ["sideDrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <ul className="sideDrawer-links">
          <li>
            <Link to="/cart" className="sideDrawer-link">
              <i className="fa fa-shopping-bag"></i>
              <span className="sideDrawer-text">Cart</span>
              <span className="sideDrawer-badge">{qty}</span>
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default SideDrawer;
