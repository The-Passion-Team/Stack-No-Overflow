import { createAsyncThunk } from "@reduxjs/toolkit"
import { APIPaths } from "~/utils"
import axios from "axios"

export const requestFindTag = createAsyncThunk(
    "tag/findTag",
    async (key: string, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.post(`${APIPaths.Tags}/findTag`, { key })
            return fulfillWithValue(response.data.data)
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)
