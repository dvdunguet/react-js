import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import itemEdit from "./itemEdit";
import filterTable from "./filterTable";
import search from "./search";
import sort from "./sort";

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  itemEdit,
  filterTable,
  search,
  sort
});

export default myReducer;
