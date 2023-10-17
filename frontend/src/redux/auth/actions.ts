import axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { ActivationPayload, LoginPayload, LogoutPayload, SignupPayload } from "./interfaces";
import { APIPaths } from "~/utils";
import { useNavigate } from "react-router-dom";

// export const requestLogin = createAsyncThunk<any, LoginPayload>(
//     "auth/login",
//     async (userData, { rejectWithValue, fulfillWithValue }) => {
//         try {
//             const response = await axios.post(`${APIPaths.Auth}/login`, userData)
//             if (response) localStorage.setItem("token", response.data.data.accessToken)
//             return fulfillWithValue(response.data)
//         } catch (error: any) {
//             return rejectWithValue(error)
//         }
//     },
// )

export const loginToAccount = createAsyncThunk<any, LoginPayload>(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${APIPaths.Auth}/login`, payload)
            payload.navigate("/")
			return res.data
        } catch (e: any) {
            console.log("e: ", e.response.data)
            return rejectWithValue(e)
        }
    },
)

export const signupToAccount = createAsyncThunk<any, SignupPayload>(
	"auth/signup", 
	async (payload, {rejectWithValue}) => {
		console.log("object");
		try {
			const res = await axios.post(`${APIPaths.Auth}/signup`, payload);
			console.log(payload);
			const navigate = useNavigate();
			navigate("/login");
			// dispatch(loginSuccess(res.data));
		} catch (e : any) {
			console.log("e: ", e.response.data);
			return rejectWithValue(e);
			// dispatch(loginFailed(e.response.data));
			// dispatch(updateError());
		}
	}
);

export const activationEmail = createAsyncThunk<any, ActivationPayload>(
    "auth/activation",
    async (payload, { rejectWithValue }) => {
        console.log("object")
        try {
            const res = await axios.post(`${APIPaths.Auth}/activation`, payload)
            console.log(payload)
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
            console.log(localStorage);
            localStorage.clear();
            payload.navigate("/login")
        } catch (e: any) {
            console.log("e: ", e.response.data)
            return rejectWithValue(e)
        }
    },
)