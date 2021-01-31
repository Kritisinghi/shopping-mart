import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* ----Reducers---- */
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";
import { productDetailReducer } from "./reducers/productDetailReducer";

const reducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productDetails: productDetailReducer,
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
