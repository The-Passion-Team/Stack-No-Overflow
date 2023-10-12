import { authReducer } from "./auth"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { usersReducer } from "./users"
import { formAskReducer } from "./formAsk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { useDispatch } from "react-redux"

const rootPersistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ["formAsk"],
}

const authPersistConfig = {
    key: "auth",
    version: 1,
    storage,
    whitelist: ["currentUser"],
}

const authPersistReducer = persistReducer(authPersistConfig, authReducer)

const rootReducer = combineReducers({
    auth: authPersistReducer,
    user: usersReducer,
    formAsk: formAskReducer,
})

const rootPersistReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({ reducer: rootPersistReducer })
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
