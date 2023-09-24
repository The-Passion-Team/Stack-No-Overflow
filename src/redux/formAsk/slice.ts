import { createSlice } from "@reduxjs/toolkit"
import { FormAskState } from "./interfaces"
import { createQuestion } from "./actions"

const fromState: FormAskState = {
    title: {
        status: "pending",
        current: false,
        data: null,
    },
    detail: {
        status: "pending",
        current: true,
        data: null,
    },
    try: {
        status: "pending",
        current: true,
        data: null,
    },
    tags: {
        status: "pending",
        current: true,
        data: null,
    },
}

const formAskSlice = createSlice({
    name: "formAsk",
    initialState: fromState,
    reducers: {
        setStatusTitle: (state) => {
            state.title.status = "succeeded"
            state.title.current = true
            state.detail.current = false
        },
        setTitle: (state, action) => {
            state.title.data = action.payload
        },

        setStatusDetail: (state) => {
            state.detail.status = "succeeded"
            state.detail.current = true
            state.try.current = false
        },
        setDetail: (state, action) => {
            state.detail.data = action.payload
        },

        setStatusTry: (state) => {
            state.try.status = "succeeded"
            state.try.current = true
            state.tags.current = false
        },
        setTry: (state, action) => {
            state.try.data = action.payload
        },

        setStatusTags: (state) => {
            state.tags.status = "succeeded"
            state.tags.current = true
        },
        setTags: (state, action) => {
            state.tags.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createQuestion.pending, (state, action) => {
                state.title.status = "pending"
            })
    },
})

const formAskReducer = formAskSlice.reducer

export { formAskReducer }

export const {
    setStatusTitle,
    setTitle,
    setStatusDetail,
    setDetail,
    setStatusTry,
    setTry,
    setStatusTags,
    setTags,
} = formAskSlice.actions
