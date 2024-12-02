import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOAD,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_LOAD,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_LOAD,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BYID_FAIL,
  GET_PRODUCT_BYID_LOAD,
  GET_PRODUCT_BYID_SUCCESS,
  GET_MY_PRODUCTS_FAIL,
  GET_MY_PRODUCTS_LOAD,
  GET_MY_PRODUCTS_SUCCESS,
} from "../ActionTypes/ProductActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  products: [],
  myProducts: [],
  product: {},
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOAD:
      return { ...state, load: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, load: false, products: payload, success: true };

    case GET_PRODUCTS_FAIL:
      return { ...state, success: false, load: false, error: payload };

    case ADD_PRODUCT_LOAD:
      return { ...state, load: true };

    case ADD_PRODUCT_SUCCESS:
      return { ...state, load: false, success: true };

    case ADD_PRODUCT_FAIL:
      return { ...state, load: false, success: false, error: payload };

    case GET_PRODUCT_BYID_LOAD:
      return { ...state, load: true };

    case GET_PRODUCT_BYID_SUCCESS:
      return {
        ...state,
        load: false,
        product: payload.foundProduct,
        success: true,
      };

    case GET_PRODUCT_BYID_FAIL:
      return { ...state, success: false, load: false, error: payload };

    case DELETE_PRODUCT_LOAD:
      return { ...state, load: true };

    case DELETE_PRODUCT_SUCCESS:
      return { ...state, load: false, success: true };

    case DELETE_PRODUCT_FAIL:
      return { ...state, load: false, success: false, error: payload };

    case EDIT_PRODUCT_LOAD:
      return { ...state, load: true };

    case EDIT_PRODUCT_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_PRODUCT_FAIL:
      return { ...state, load: false, success: false, error: payload };

    case GET_MY_PRODUCTS_LOAD:
      return { ...state, load: true };

    case GET_MY_PRODUCTS_SUCCESS:
      return { ...state, load: false, myProducts: payload, success: true };

    case GET_MY_PRODUCTS_FAIL:
      return { ...state, success: false, load: false, error: payload };

    default:
      return state;
  }
};

export default ProductReducer;
