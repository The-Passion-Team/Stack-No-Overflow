import { createSlice } from "@reduxjs/toolkit"
import {
    activationEmail,
    signupToAccount,
    logoutFromAccount,
    requestLogin,
    requestLoginWithGoogle,
} from "./actions"
import { AuthState } from "./interfaces"

const initialState: AuthState = {
    status: "idle",
    message: null,
    currentUser: null,
    accessToken: undefined,
    _id: undefined,
    error: "idle",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // LOG IN
            .addCase(requestLogin.pending, (state) => {
                state.status = "pending"
            })
            .addCase(requestLogin.rejected, (state, action) => {
                state.status = "failed"
                state.message = action.payload
            })
            .addCase(requestLogin.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.error = action.payload?.error
                state.message = action.payload?.message
                state.currentUser = action.payload?.data
            })

            // LOG IN
            .addCase(requestLoginWithGoogle.pending, (state) => {
                state.status = "pending"
            })
            .addCase(requestLoginWithGoogle.rejected, (state, action) => {
                state.status = "failed"
                state.message = action.payload
            })
            .addCase(requestLoginWithGoogle.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.error = action.payload?.error
                state.message = action.payload?.message
                state.currentUser = action.payload?.data
            })

            // SIGN UP
            .addCase(signupToAccount.pending, (state) => {
                state.status = "pending"
            })
            .addCase(signupToAccount.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(signupToAccount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.error = action.payload.error
                state.message = action.payload.message
            })

            // ACTIVE EMAIL
            .addCase(activationEmail.pending, (state) => {
                state.status = "pending"
            })
            .addCase(activationEmail.rejected, (state) => {
                state.status = "failed"
            })
            .addCase(activationEmail.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload
            })

            // LOG OUT
            .addCase(logoutFromAccount.pending, (state) => {
                state.status = "pending"
            })
            .addCase(logoutFromAccount.rejected, (state) => {
                state.status = "failed"
            })
            .addCase(logoutFromAccount.fulfilled, (state) => {
                state.status = "succeeded"
                state.currentUser = null
            })
    },
})

const authReducer = authSlice.reducer

export { authReducer }
