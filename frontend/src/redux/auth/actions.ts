import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginPayload, SignupPayload } from "./interfaces"
import { APIPaths } from "~/utils"
import { useNavigate } from "react-router-dom"

// CHECK LOGGED
// export const checkLogged = createAsyncThunk("auth/checkLogged", async (token, {rejectWithValue}) => {
//     try {
//         console.log('token', token)
//     } catch (error) {
//         console.log('error', error)
//     }
// })

// API LOG IN
export const requestLogin = createAsyncThunk<any, LoginPayload>(
    "auth/login",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIPaths.Auth}/login`, userData)
            console.log('response', response.data.data)
            if(response) localStorage.setItem('token', response.data.data.accessToken)
            return
        } catch (error: any) {
            console.log("error: ", error.response.data)
            return error
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
