import * as types from "../constants/ActionType";
import { findIndex } from "lodash";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];
// var initialState = [];

export default (
  state = initialState,
  { type, product, quantity, id, volume }
) => {
  switch (type) {
    case types.ADD_TO_CART:
      {
        let index = findIndex(state, ["product.id", product.id]);
        if (index > -1) {
          state[index] = {
            ...state[index],
            quantity: state[index].quantity + quantity
          };
        } else
          state.push({
            product,
            quantity
          });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case types.DELETE_PRODUCT_IN_CART:
      {
        let index = findIndex(state, ["product.id", id]);
        if (index > -1) {
          state.splice(index, 1);
        }
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case types.CHANGE_VOLUME_PRODUCT:
      let index = findIndex(state, ["product.id", id]);
      if (index > -1) {
        if (volume > 0) {
          state[index] = {
            ...state[index],
            quantity: volume
          };
        }
      }

      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};
