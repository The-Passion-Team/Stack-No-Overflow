import { createSlice } from "@reduxjs/toolkit"
import { requestLogin, signupToAccount } from "./actions"
import { AuthState } from "./interfaces"

const initialState: AuthState = {
    status: "idle",
    message: null,
    currentUser: null,
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
            .addCase(requestLogin.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload.message
                state.currentUser = action.payload.data
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
