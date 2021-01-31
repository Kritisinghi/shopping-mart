import * as actionTypes from "../constants";
import axios from "axios";
import config from "../../../config/config";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${config.apiBaseUrl}/api/v1/products/${id}`);
  dispatch({
    type: actionTypes.CART_ADD,
    payload: {
      ...data,
      quantity: qty,
    },
  });
  console.log(getState().cart);
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_REMOVE,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const setCart = () => (dispatch) => {
  if (JSON.parse(localStorage.getItem("cart"))) {
    dispatch({
      type: actionTypes.CART_ADD_ALLL,
      payload: JSON.parse(localStorage.getItem("cart")),
    });
  }
};
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_GET_REQUEST,
    });
    const { data } = await axios.get(`${config.apiBaseUrl}/api/v1/products`);
    dispatch({
      type: actionTypes.PRODUCT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.PRODUCT_GET_FAILURE,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.PRODUCT_DETAIL_GET_REQUEST,
    });
    const { data } = await axios.get(`${config.apiBaseUrl}/api/v1/products/${id}`);
    dispatch({
      type: actionTypes.PRODUCT_DETAIL_GET_SUCCESS,
      payload: {
        ...data,
      },
    });
  } catch (err) {
    dispatch({
      type: actionTypes.PRODUCT_DETAIL_GET_FAILURE,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
