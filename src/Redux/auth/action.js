export const AUTH_CRED = "AUTH_CRED";
export const SAVE_CRED = "SAVE_CRED";

export const checkAuth = (payload) => ({ type: AUTH_CRED, payload });
export const saveAuth = (payload) => ({ type: SAVE_CRED, payload });
