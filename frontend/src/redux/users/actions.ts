import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { UserData } from "./interfaces";

export const resetUsersState = createAction("users/reset");

// export const getUsers = createAsyncThunk<UserData[], PaginationPayload>(
// 	"users/getUsers",
// 	async (payload, { rejectWithValue, getState, dispatch }) => {
// 		const {
// 			auth: { token }
// 		} = getState();
// 		const { data, error } = <{ data: UserData[]; error?: Error }>(
// 			await fetchHandler({ path: APIPaths.Users, method: "GET", query: payload, token })
// 		);
// 		if (_.isNil(error)) {
// 			return data;
// 		}
// 		dispatch(pushMessage({ message: error.message, severity: "error" }));
// 		return rejectWithValue(error);
// 	}
// );
