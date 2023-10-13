import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginPayload, SignupPayload } from "./interfaces"
import { APIPaths } from "~/utils"
import { useNavigate } from "react-router-dom"

// CHECK LOGGED
export const checkLogged = createAsyncThunk(
    "auth/checkLogged",
    async (accessToken: string, { rejectWithValue }) => {
        try {
            // return console.log("accessToken", accessToken)
        } catch (error) {
            console.log("error", error)
        }
    },
)

// API LOG IN
export const requestLogin = createAsyncThunk<any, LoginPayload>(
    "auth/login",
    async (userData, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.post(`${APIPaths.Auth}/login`, userData)
            if (response) localStorage.setItem("token", response.data.data.accessToken)
            return fulfillWithValue(response.data)
        } catch (error: any) {
            return rejectWithValue(error)
        }
    },
)

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
