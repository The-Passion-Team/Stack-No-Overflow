import { createSlice } from "@reduxjs/toolkit"
import { requestLogin, signupToAccount } from "./actions"
import { Status } from "~/utils"

interface AuthState {
    status?: Status
    data?: any
    error?: Error
    msg?: string | undefined
    setNotiRegistrationEmail?: any
    emailConfirm?: string
    setEmailConfirm?: any
}

const initialState: AuthState = {
    status: "idle",
    msg: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // LOG IN
            .addCase(requestLogin.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(requestLogin.rejected, (state, action) => {
                state.status = "failed"
            })
            .addCase(requestLogin.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.data = action.payload
            })

            // SIGN UP
            .addCase(signupToAccount.pending, (state, action) => {
                state.status = "pending"
                // state.m = undefined;
            })
            .addCase(signupToAccount.rejected, (state, action) => {
                state.status = "failed"
                // state.msg = action.payload
            })
            .addCase(signupToAccount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.msg = action.payload
            })
    },
})

const authReducer = authSlice.reducer

export { authReducer }
