import { RootState } from "../interfaces";

export const selectorCurrentUser = (state: RootState) => state.auth.currentUser
