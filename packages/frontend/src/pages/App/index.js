import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "pages/Home";
import Product from "pages/Product";
import Cart from "pages/Cart";
import Navbar from "components/Navbar";
import Backdrop from "components/Backdrop"
import SideDrawer from "components/SideDrawer"
import {useSelector,useDispatch} from 'react-redux'
import {setCart} from 'redux/actions'

const App = () => {
    const [sideToggle,setSideToggle]=useState(false)
    const {cartItems}=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(setCart())
    },[dispatch])
  return (
    <div className="grid-container">
      <Router>
        <Navbar click={()=>setSideToggle(true)} qty={cartItems.length}/>
        <Backdrop show={sideToggle} click={()=>setSideToggle(false)} />
        <SideDrawer show={sideToggle} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/?:id" component={Product} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
};
export default App;