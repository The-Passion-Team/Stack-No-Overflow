import { Status } from "~/utils"
import { UserData } from "../users/interfaces";

export interface AuthState {
	status?: Status;
	currentUser?: any;
	error?: Error;
	msg?: any;
	setNotiRegistrationEmail?: any;
	emailConfirm?: string;
	setEmailConfirm?: any;
}

export interface LoginPayload {
	email: string;
	password: string;
	navigate: any;
}

export interface SignupPayload {
	displayname: string;
	email: string;
	password: string;
}

export interface ActivationPayload {
	activationToken: string;
}

export interface LogoutPayload {
	userId: any;
	headers: any;
	navigate: any;
}

