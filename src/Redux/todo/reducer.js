import { ADD_TODO } from "./action";

let initState = { todo: [] };

export const storeReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case "ADD_ONCE":
      return {
        ...store,
        todo: payload,
      };

    case ADD_TODO:
      return {
        ...store,
        todo: [...store.todo, ...payload],
      };

    default:
      return store;
  }
};
