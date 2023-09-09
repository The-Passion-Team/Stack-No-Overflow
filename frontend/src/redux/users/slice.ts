import { createSlice } from "@reduxjs/toolkit"
import { resetUsersState } from "./actions";
import { UsersState } from "./interfaces";

const usersState: UsersState = {
	getUsers: {
		data: [],
		status: "pending"
	},
	createUser: {
		status: "pending"
	},
	editUser: {
		status: "pending"
	},
	deleteUser: {
		status: "pending"
    }
}

const usersSlice = createSlice({
    name: "users",
    initialState: usersState,
    reducers: {},
	extraReducers: (builder) => {
		builder
        .addCase(resetUsersState, (state, action) => {
            return usersState;
        });
	}
});

const usersReducer = usersSlice.reducer;

export { usersReducer };
