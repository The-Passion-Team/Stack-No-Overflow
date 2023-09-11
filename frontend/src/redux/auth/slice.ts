import { createSlice } from "@reduxjs/toolkit"
import { signupToAccount } from "./actions"
import { AuthState } from "./interfaces"

const authState: AuthState = {
    status: "pending",
    msg: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(loginToAccount.pending, (state, action) => {
            // 	state.status = "pending";
            // 	// state.error = undefined;
            // })
            // .addCase(loginToAccount.rejected, (state, action) => {
            // 	state.status = "failed";
            // 	// state.error = action.payload;
            // })
            // .addCase(loginToAccount.fulfilled, (state, action) => {
            // 	state.status = "succeeded";
            // 	// state.token = action.payload;
            // })
            .addCase(signupToAccount.pending, (state, action) => {
                state.status = "pending"
                // state.m = undefined;
            })
            .addCase(signupToAccount.rejected, (state, action) => {
                state.status = "failed"
                state.msg = action.payload
            })
            .addCase(signupToAccount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.msg = action.payload
            })
    },
})

const authReducer = authSlice.reducer

export { authReducer }
