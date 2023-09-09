import { Status } from "~/utils"
import { UserData } from "../users/interfaces";

export interface AuthState {
	status: Status;
	currentUser?: UserData;
	error?: Error;
	msg?: any;
}

export interface LoginPayload {
	email: string;
	password: string;
}

export interface SignupPayload {
	displayname: string;
	email: string;
	password: string;
}

