import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ActivationPayload, LoginPayload, LogoutPayload, SignupPayload } from "./interfaces"
import { APIPaths } from "~/utils"
import Message from "~/components/Message"

// API LOG IN
export const requestLogin = createAsyncThunk<any, LoginPayload>(
    "auth/login",
    async (userData, { rejectWithValue, fulfillWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/login`, userData)
            const err = res?.data?.error
            const msg = res?.data?.message

            if (err === 0) {
                userData.navigate("/")
                Message(err, msg)
                fulfillWithValue(res.data)
            }

            return fulfillWithValue(res.data)
        } catch (error: any) {
            return rejectWithValue(error)
        }
    },
)
export const requestLoginWithGoogle = createAsyncThunk<any, LoginPayload>(
    "auth/loginWithGoogle",
    async (userGoogle, { rejectWithValue, fulfillWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/loginWithGoogle`, userGoogle)
            const err = res?.data?.error
            const msg = res?.data?.message

            if (err === 0) {
                userGoogle.navigate("/")
                Message(err, msg)
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
    async (payload, { rejectWithValue, fulfillWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/signup`, payload)
            return fulfillWithValue(res.data)
        } catch (e: any) {
            return rejectWithValue(e)
        }
    },
)

export const activationEmail = createAsyncThunk<any, ActivationPayload>(
    "auth/activation",
    async (payload, { rejectWithValue, fulfillWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/activation`, payload)
            return fulfillWithValue(res.data)
        } catch (e: any) {
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
            return rejectWithValue(e)
        }
    },
)
