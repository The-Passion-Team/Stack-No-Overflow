import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginPayload, SignupPayload } from "./interfaces"
import { APIPaths } from "~/utils"
import { useNavigate } from "react-router-dom"

// API LOG IN
export const requestLogin = createAsyncThunk("auth/login", async (userData: LoginPayload) => {
    try {
        const res = await axios.post(`${APIPaths.Auth}/login`, userData)
        console.log("res.data", res.data)
    } catch (error) {
        return error
    }
})

// API SIGN UP
export const signupToAccount = createAsyncThunk<any, SignupPayload>(
    "auth/signup",
    async (payload, { rejectWithValue }) => {
        console.log("object")
        try {
            const res = await axios.post(`${APIPaths.Auth}/signup`, payload)
            console.log(res)
            const navigate = useNavigate()
            navigate("/login")
            // dispatch(loginSuccess(res.data));
        } catch (e: any) {
            console.log("e: ", e.response.data)
            return rejectWithValue(e)
            // dispatch(loginFailed(e.response.data));
            // dispatch(updateError());
        }
    },
)
