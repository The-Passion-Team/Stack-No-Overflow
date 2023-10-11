import { createSlice } from "@reduxjs/toolkit"
import { activationEmail, signupToAccount, loginToAccount, logoutFromAccount } from "./actions"
import { AuthState } from "./interfaces"

const authState: AuthState = {
    status: "pending",
    msg: "",
    currentUser: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginToAccount.pending, (state, action) => {
            	state.status = "pending";
            	state.msg = undefined;
            })
            .addCase(loginToAccount.rejected, (state, action) => {
            	state.status = "failed";
            	state.msg = action.payload;
            })
            .addCase(loginToAccount.fulfilled, (state, action) => {
            	state.status = "succeeded";
            	// state.msg = action.payload;
                state.currentUser = action.payload;
            })
            .addCase(signupToAccount.pending, (state, action) => {
                state.status = "pending"
                state.msg = undefined;
            })
            .addCase(signupToAccount.rejected, (state, action) => {
                state.status = "failed"
                state.msg = action.payload
            })
            .addCase(signupToAccount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.msg = action.payload
            })
            .addCase(activationEmail.pending, (state, action) => {
                state.status = "pending"
                state.msg = undefined;
            })
            .addCase(activationEmail.rejected, (state, action) => {
                state.status = "failed"
                state.msg = action.payload
            })
            .addCase(activationEmail.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.msg = action.payload
            })
            .addCase(logoutFromAccount.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(logoutFromAccount.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(logoutFromAccount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.currentUser = null
				// return authState;
			});
    },
})

const authReducer = authSlice.reducer

export { authReducer }
