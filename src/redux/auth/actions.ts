import axios from "axios"
import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { LoginPayload, SignupPayload } from "./interfaces"
import { APIPaths } from "~/utils"
import { useNavigate } from "react-router-dom"

// export const loginToAccount = createAsyncThunk<string, LoginPayload>(
//     "auth/login",
//     async (user, { rejectWithValue, dispatch }) => {
//         try {
//             const res = await axios.post(`${APIPaths.Auth}/login`, user)
//             console.log(res)
//             // dispatch(loginSuccess(res.data))
//             return
//         } catch (e) {
//             // console.log("e: ", e.response.data)
//             // dispatch(loginFailed(e.response.data))
//             // dispatch(updateError())
//         }
//     },
// )

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
