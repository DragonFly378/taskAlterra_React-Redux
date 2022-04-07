import { createStore } from "redux";
/** React Redux */
import { combineReducers } from "redux";
/** Reducer */
import taskReducer from "./Tasks/reducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;
