import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { APIPaths } from "~/utils"
import { IPost } from "./interfaces"

export const requestGetPost = createAsyncThunk(
    "post/getPost",
    async (data: IPost, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.post(`${APIPaths.Post}/getPost`, data)
            return fulfillWithValue(response.data)
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)

export const requestCreatePost = createAsyncThunk(
    "post/createPost",
    async (data: IPost, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.post(`${APIPaths.Post}/createPost`, data)
            return fulfillWithValue(response.data)
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)

export const requestGetPosts = createAsyncThunk(
    "post/getPosts",
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.get(`${APIPaths.Post}/getAllPosts`)
            return fulfillWithValue(response.data)
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)
