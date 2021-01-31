import * as actionTypes from "../constants";

export const productReducer = (
  state = {
    products: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_GET_REQUEST:
      return {
        products: [],
        loading: true,
      };
    case actionTypes.PRODUCT_GET_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.PRODUCT_GET_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
