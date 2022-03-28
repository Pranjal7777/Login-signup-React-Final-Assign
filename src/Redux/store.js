import { createStore, combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { storeReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: storeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
