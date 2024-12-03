import axios from "axios";
import { ADD_TO_CART_FAIL, ADD_TO_CART_LOAD, ADD_TO_CART_SUCCESS } from "../ActionTypes/CartActionTypes";


// Add product to cart by id action
export const addToCart = (id) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_LOAD });
  try {
        const config = {
          headers: { Authorization: localStorage.getItem("token") },
        };
    const result = await axios.put(`/api/product/add-to-cart/${id}`, config);
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: result.data.cart });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error
    });
  }
};