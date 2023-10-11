import { authReducer } from "./auth"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { usersReducer } from "./users"
import { formAskReducer } from "./formAsk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { useDispatch } from "react-redux"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth", "users", "formAsk"],
}

const combinedReducer = combineReducers({
    auth: authReducer,
    user: usersReducer,
    formAsk: formAskReducer,
})

const rootReducer = (state: any, action: any) => {
    // if (action.type === "auth/logoutSuccess") {
    // 	state = undefined;
    // }
    return combinedReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    // 	getDefaultMiddleware({
    // 		serializableCheck: {
    // 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // 		}
    // 	})
})

export const StorePersistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
