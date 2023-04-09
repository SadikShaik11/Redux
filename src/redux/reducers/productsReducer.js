import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
  cartItems: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemToAdd = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );

      if (existingItem) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.iaddToCartd === itemToAdd.id) {
            return {
              ...item,
              quantity: item.quantity + itemToAdd.quantity,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd],
        };
      }

    case "REMOVE_FROM_CART":
      const idToRemove = action.payload.id;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== idToRemove
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case "INCREASE_QUANTITY":
      const idToIncrease = action.payload.id;
      const updatedCartItems2 = state.cartItems.map((item) => {
        if (item.id === idToIncrease) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: updatedCartItems2,
      };

    case "DECREASE_QUANTITY":
      const idToDecrease = action.payload.id;
      const updatedCartItems3 = state.cartItems.map((item) => {
        if (item.id === idToDecrease) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: updatedCartItems3,
      };
    case "FINAL_CART":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default cartReducer;
