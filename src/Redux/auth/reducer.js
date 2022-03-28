import { AUTH_CRED, SAVE_CRED } from "./action";

const initState = { auth: localStorage.getItem("authCred") || "" };

export const authReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case AUTH_CRED:
      return store;
    case SAVE_CRED:
      localStorage.setItem("authCred", payload);
      return { ...store, auth: payload };
    default:
      return store;
  }
};
