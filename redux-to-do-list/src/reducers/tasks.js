import * as types from "../constants/ActionTypes";
import { findIndex } from "lodash";

let data = JSON.parse(localStorage.getItem("tasks"));
let initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      if (action.task && action.task.id) {
        let index = findIndex(state, ["id", action.task.id]);
        let newTask = {
          ...state[index],
          name: action.task.name,
          status: action.task.status
        };
        state[index] = newTask;
      } else {
        let newTask = {
          id: guidGenerator(),
          name: action.task.name,
          status: action.task.status
        };
        state.push(newTask);
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.UPDATE_STATUS_TASK:
      {
        let index = findIndex(state, ["id", action.id]);
        state[index] = { ...state[index], status: !state[index].status };
        localStorage.setItem("tasks", JSON.stringify(state));
      }
      return [...state];

    case types.DELETE_ITEM_TASK:
      {
        let index = findIndex(state, ["id", action.id]);
        state.splice(index, 1);
      }
      return [...state];
    case types.UPDATE_ITEM:
      return [...state];

    default:
      return state;
  }
};

let S4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
let guidGenerator = () => {
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

export default myReducer;
