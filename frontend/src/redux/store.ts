import { authReducer } from "./auth"
import { configureStore } from "@reduxjs/toolkit"
import { usersReducer } from "./users"
import { formAskReducer } from "./formAsk"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: usersReducer,
        formAsk: formAskReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
