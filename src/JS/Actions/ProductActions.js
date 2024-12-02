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
import axios from "axios";

// Get all products
export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOAD });
  try {
    const result = await axios.get("/api/products/get-products");
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: result.data.foundProducts,
    });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response.data.error });
  }
};

// Get product by id action
export const getProductById = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_BYID_LOAD });
  try {
    const result = await axios.get(`/api/products/get-product/${id}`);
    dispatch({ type: GET_PRODUCT_BYID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_BYID_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Add product action
export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_LOAD });
  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.post(
      "/api/products/add-product",
      newProduct,
      config
    );
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: result.data });
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data });
  }
};

// Delete product by id action
export const deleteProduct = (id, navigate) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_LOAD });
  try {
    const result = await axios.delete(`/api/products/delete-product/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: result.data });
    navigate("/shop");
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.response.data.error });
  }
};

// Edit product action
export const editProduct = (id, newProduct) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_LOAD });
  try {
    const result = await axios.put(
      `/api/products/update-product/${id}`,
      newProduct
    );
    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: result.data });
    dispatch(getProductById(id));
  } catch (error) {
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: error.response.data.error });
  }
};

// Get products for the current user (My Products)
export const getMyProducts = () => async (dispatch) => {
  dispatch({ type: GET_MY_PRODUCTS_LOAD });
  try {
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/products/get-my-products", config);
    dispatch({
      type: GET_MY_PRODUCTS_SUCCESS,
      payload: result.data.foundMyProducts,
    });
  } catch (error) {
    dispatch({
      type: GET_MY_PRODUCTS_FAIL,
      payload: error.response.data.error,
    });
  }
};
