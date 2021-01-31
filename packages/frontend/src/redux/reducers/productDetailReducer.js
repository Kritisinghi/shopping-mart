import * as actionTypes from "../constants";

export const productDetailReducer = (state = { details: {} }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAIL_GET_REQUEST:
      return {
        details: null,
        loading: true,
      };
    case actionTypes.PRODUCT_DETAIL_GET_SUCCESS:
      return {
        loading: false,
        details: action.payload,
      };
    case actionTypes.PRODUCT_DETAIL_GET_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
