import * as types from "../constants/ActionType";

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};

export const actChangeMessage = message => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  };
};

export const actDeleteProductInCart = id => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    id
  };
};

export const actChangeVolumeProduct = (id, volume) => {
  return {
    type: types.CHANGE_VOLUME_PRODUCT,
    id,
    volume
  };
};
