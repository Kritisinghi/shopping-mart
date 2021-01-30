import React,{useEffect} from "react";
import ProductCard from "components/productCard";
import {useSelector,useDispatch} from 'react-redux' 
import { getProducts } from 'redux/actions'
import "./style.css";

const Home = () => {
    const dispatch = useDispatch();
    const { products,loading,error}=useSelector((state)=> state.product);
    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])
  return (
    <div className="home">
    <h2 className="home-title">Products</h2>
    <div className="home-products">
        { loading ? (<h2>Loading...</h2>) : error? (<h2>{error}</h2>):
          (products.map((item)=><ProductCard id={item._id} data={item} />
          ))
        }
    </div>
    </div>
  )
};

export default Home;
