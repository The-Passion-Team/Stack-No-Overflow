import { authReducer } from "./auth"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { usersReducer } from "./users"
import { formAskReducer } from "./formAsk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { useDispatch } from "react-redux"
import { postReducer } from "./posts/slice"

const rootPersistConfig = {
    key: "root",
    storage,
    blacklist: ["formAsk", "posts", "auth"],
}

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["currentUser"],
    blacklist: ["status", "message"],
}

const authPersistReducer = persistReducer(authPersistConfig, authReducer)

const rootReducer = combineReducers({
    auth: authPersistReducer,
    user: usersReducer,
    formAsk: formAskReducer,
    posts: postReducer,
})

const rootPersistReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({ reducer: rootPersistReducer })
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
