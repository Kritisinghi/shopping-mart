import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const ProductCard = ({ id, data }) => {
  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-view-btn">
        <img src={data.imageUrl} alt={data.name} />
        <div className="product-info">
          <h3 className="product-name">{data.name}</h3>
          <h4 className="product-description">
            {data.description.length > 200
              ? data.description.substring(0, 200) + "..."
              : data.description}
          </h4>
          <div className="product-price">$ {data.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
