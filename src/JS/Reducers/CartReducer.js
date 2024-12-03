import { ADD_TO_CART_FAIL, ADD_TO_CART_LOAD, ADD_TO_CART_SUCCESS } from "../ActionTypes/CartActionTypes";


const initialState = {
  load: false,
  success: null,
  error: null,
  cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART_LOAD:
      return { ...state, load: true };

    case ADD_TO_CART_SUCCESS:
      return { ...state, load: false, cart: payload, success: true };

    case ADD_TO_CART_FAIL:
      return { ...state, success: false, load: false, error: payload.errors };

    default:
      return state;
  }
};

export default CartReducer;
