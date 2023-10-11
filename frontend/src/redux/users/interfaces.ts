import { Status } from "~/utils"

export interface UserData {
	id?: string;
	email?: string;
	displayname?:string;
	password?: string;
	firstName?: string;
	lastName?: string;
}

export interface UsersState {
	getUsers: {
		data: UserData[];
		status: Status;
		error?: Error;
	};
	createUser: {
		status: Status;
		error?: Error;
	};
	editUser: {
		status: Status;
		error?: Error;
	};
	deleteUser: {
		status: Status;
		error?: Error;
	};
}
