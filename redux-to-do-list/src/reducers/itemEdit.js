import * as types from "../constants/ActionTypes";

let initialState = {};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_ITEM:
      return action.task;

    default:
      return state;
  }
};

export default myReducer;
