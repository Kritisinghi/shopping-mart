import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "redux/actions";
import ProductCard from "components/productCard";
import "./style.css";
import LoadingOverlay from "../../components/LoadingOverlay";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home">
      {loading ? (
        <LoadingOverlay></LoadingOverlay>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2 className="home-title">Products</h2>
          <div className="row-base"></div>
          <section className="home-products">
            {products.map((item) => (
              <ProductCard id={item._id} data={item} key={item._id} />
            ))}
          </section>
        </>
      )}
    </div>
  );
};
export default Home;
