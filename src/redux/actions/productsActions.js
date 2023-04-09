import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const addToCart = (product) => {
  console.log(product);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const FinalCart = (product) => {
  console.log(product);
  return {
    type: ActionTypes.FINAL_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id,
  },
});

export const increaseQuantity = (id) => ({
  type: "INCREASE_QUANTITY",
  payload: {
    id,
  },
});

export const decreaseQuantity = (id) => ({
  type: "DECREASE_QUANTITY",
  payload: {
    id,
  },
});


