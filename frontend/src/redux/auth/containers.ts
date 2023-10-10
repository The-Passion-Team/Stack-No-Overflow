import { RootState } from "../interfaces";

export const selectorCurrentUser = (state: RootState) => state.auth
export const selectorLogin = (state: RootState) => state.auth.login
