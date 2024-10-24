import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => { //add to cart action
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => { //check item id and remove from cart
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => { //check item id and adjust qty in cart
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => { //load current item to cart
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};