import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: {
            data: null,
        },
    },
    reducers: {
        currentUser: (state, action) => {
            state.currentUser.data = action.payload
        },
    },
})

export const { currentUser } = authSlice.actions

export const selectorCurrentUser = (state: any) => state.auth.currentUser

export default authSlice.reducer
