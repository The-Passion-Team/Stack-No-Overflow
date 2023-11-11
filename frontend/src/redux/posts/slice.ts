import { createSlice } from "@reduxjs/toolkit"
import { IPostState } from "./interfaces"
import { requestCreatePost, requestGetPost, requestGetPosts } from "./actions"

const initialState: IPostState = {
    status: "idle",
    message: "",
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // CREATE NEW POST
            .addCase(requestCreatePost.pending, (state) => {
                state.status = "pending"
            })
            .addCase(requestCreatePost.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload.message
                state.posts = action.payload
            })
            .addCase(requestCreatePost.rejected, (state) => {
                state.status = "failed"
            })

            // GET POSTS
            .addCase(requestGetPosts.pending, (state) => {
                state.status = "pending"
            })
            .addCase(requestGetPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload.message
                state.posts = action.payload.data
            })
            .addCase(requestGetPosts.rejected, (state) => {
                state.status = "failed"
            })

            // GET One Post
            .addCase(requestGetPost.pending, (state) => {
                state.status = "pending"
            })
            .addCase(requestGetPost.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.message = action.payload.message
                state.post = action.payload.data
            })
            .addCase(requestGetPost.rejected, (state) => {
                state.status = "failed"
            })
    },
})

const postReducer = postSlice.reducer

export { postReducer }
