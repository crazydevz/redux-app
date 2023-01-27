import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/count";

export default () => {
  const store = createStore(
    combineReducers({
      count: countReducer,
    })
  );
  return store;
};
