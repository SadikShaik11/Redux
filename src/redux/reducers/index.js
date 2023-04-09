import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  cartReducer,
} from "./productsReducer";
import { authReducer } from "./authReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  auth: authReducer,
  add_cart: cartReducer,
});
export default reducers;
