import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import message from "./message";

export const appReducers = combineReducers({
  products,
  cart,
  message
});
