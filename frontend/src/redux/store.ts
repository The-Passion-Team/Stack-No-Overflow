import { authReducer } from "./auth"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { usersReducer } from "./users"
import { formAskReducer } from "./formAsk"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["auth", "users"],
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
