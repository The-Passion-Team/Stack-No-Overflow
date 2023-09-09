import { AuthState } from "./auth";
import { UsersState } from "./users";

export interface RootState {
	auth: AuthState;
	users: UsersState;
}