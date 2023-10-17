import { createSlice } from "@reduxjs/toolkit"
import { activationEmail, signupToAccount, logoutFromAccount, requestLogin } from "./actions"
import { AuthState } from "./interfaces"

const initialState: AuthState = {
    status: "idle",
    message: null,
    currentUser: null,
    accessToken: undefined,
    _id: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestLogin.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(requestLogin.rejected, (state, action) => {
                state.status = "failed"
                state.message = action.payload
            })
            .addCase(requestLogin.fulfilled, (state, action) => {
                state.status = "succeeded"
                // state.msg = action.payload;
                state.currentUser = action.payload
            })
            .addCase(signupToAccount.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(signupToAccount.rejected, (state, action) => {
                state.status = "failed"
                // state.msg = action.payload
            })
            .addCase(signupToAccount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload
            })
            .addCase(activationEmail.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(activationEmail.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(activationEmail.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload
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
            })
    },
})

const authReducer = authSlice.reducer

export { authReducer }
