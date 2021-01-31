import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails, addToCart } from "redux/actions";
import "./style.css";
import LoadingOverlay from "../../components/LoadingOverlay";

const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { details, loading, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (details && match.params.id !== details._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch]);

  const addItem = () => {
    dispatch(addToCart(details._id, qty));
  };

  return (
    <div className="productScreen">
      {loading ? (
        <LoadingOverlay></LoadingOverlay>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productScreen-left">
            <div className="left-image">
              <img src={details.imageUrl} alt={details.name} />
            </div>
            <div className="left-info">
              <p className="left-name">{details.name}</p>
              <p>Price : ${details.price}</p>
              <p>Description: ${details.description}</p>
            </div>
          </div>
          <div className="productScreen-right">
            <div className="right-info">
              <p>
                Price: <span>${details.price}</span>
              </p>
              <p>
                Status: <span>{details.stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Qty:{" "}
                <select onBlur={(evt) => setQty(evt.target.value)}>
                  {Array.apply(null, { length: details.stock }).map((e, i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addItem}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
