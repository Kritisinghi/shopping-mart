import React from "react";
import "./style.css";

const Backdrop = ({ show, click }) => {
  return show && <div className="backdrop" role="presentation" onClick={click}></div>;
};

export default Backdrop;
