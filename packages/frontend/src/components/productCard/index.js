import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ProductCard = ({ id, data }) => {
  return (
    <div className="product">
      <img src={data.imageUrl} alt={data.name} />
      <div className="product-info">
        <p className="product-name">{data.name}</p>
        <p className="product-description">
          {data.description.length > 200
            ? data.description.substring(1, 200) + "..."
            : data.description}
        </p>
        <p className="product-price">${data.price}</p>
        <Link to={`/product/${id}`} className="product-view-btn">
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
