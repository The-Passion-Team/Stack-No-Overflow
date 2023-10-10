import { createSlice } from "@reduxjs/toolkit"
import { requestLogin, signupToAccount } from "./actions"
import { AuthState } from "./interfaces"

const initialState: AuthState = {
    status: "idle",
    message: null,
    login: {
        status: "idle",
        message: null,
        error: null,
    },
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // LOG IN
            .addCase(requestLogin.pending, (state, action) => {
                // state.login?.status = "pending"
                console.log('state', {state, action})
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
                state.message = action.payload
            })
    },
})

const authReducer = authSlice.reducer

export { authReducer }
