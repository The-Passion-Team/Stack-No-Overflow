import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ActivationPayload, LoginPayload, LogoutPayload, SignupPayload } from "./interfaces"
import { APIPaths } from "~/utils"
import { useNavigate } from "react-router-dom"
import Message from "~/components/Message"

// API LOG IN
export const requestLogin = createAsyncThunk<any, LoginPayload>(
    "auth/login",
    async (userData, { rejectWithValue, fulfillWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/login`, userData)
            const err = res?.data?.error
            const msg = res?.data?.message

            Message(err, msg)

            if (err === 0) {
                userData.navigate("/")
                fulfillWithValue(res.data)
            }

            return fulfillWithValue(res.data)
        } catch (error: any) {
            return rejectWithValue(error)
        }
    },
)

// SIGN UP
export const signupToAccount = createAsyncThunk<any, SignupPayload>(
    "auth/signup",
    async (payload, { rejectWithValue }) => {
        console.log("object")
        try {
            const res = await axios.post(`${APIPaths.Auth}/signup`, payload)
            console.log(payload)
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

export const activationEmail = createAsyncThunk<any, ActivationPayload>(
    "auth/activation",
    async (payload, { rejectWithValue }) => {
        console.log("object")
        try {
            const res = await axios.post(`${APIPaths.Auth}/activation`, payload)
            console.log("res", res)
        } catch (e: any) {
            console.log("e: ", e.response.data)
            return rejectWithValue(e)
        }
    },
)

export const logoutFromAccount = createAsyncThunk<any, LogoutPayload>(
    "auth/logout",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/logout`, payload)
            console.log(payload)
            console.log(res)
            console.log(localStorage)
            localStorage.clear()
            payload.navigate("/login")
        } catch (e: any) {
            console.log("e: ", e.response.data)
            return rejectWithValue(e)
        }
    },
)
