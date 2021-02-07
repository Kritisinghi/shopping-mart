import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setCart } from "redux/actions";

/* ---- SCREENS----*/
import Home from "pages/Home";
import Product from "pages/Product";
import Cart from "pages/Cart";
import Login from "pages/Login"
/* ---- Components ----*/
import Navbar from "components/Navbar";
import Backdrop from "components/Backdrop";
import SideDrawer from "components/SideDrawer";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

  return (
    <div className="grid-container">
      <Router>
        <Navbar click={() => setSideToggle(true)} qty={cartItems.length} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} qty={cartItems.length} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
