import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { APIPaths } from "~/utils"
import { IPost } from "./interfaces"

export const requestCreatePost = createAsyncThunk(
    "post/createPost",
    async (data: IPost, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.post(`${APIPaths.Post}/createPost`, data)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)
