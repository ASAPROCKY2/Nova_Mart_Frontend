// src/app/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ✅ Import RTK Query APIs
import { usersAPI } from "../Features/users/userAPI";
import { loginAPI } from "../Features/login/loginAPI"; // <-- added

// ✅ Import your user slice
import userReducer from "../Features/login/userSlice"; // <-- adjust path if needed

// ⚙️ Redux Persist Configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // ✅ Persist only user slice
};

// 🧩 Combine all reducers
const rootReducer = combineReducers({
  user: userReducer, // ✅ user state
  [usersAPI.reducerPath]: usersAPI.reducer, // ✅ users API
  [loginAPI.reducerPath]: loginAPI.reducer, // ✅ login API
});

// 🧱 Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🏪 Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    })
      .concat(usersAPI.middleware)
      .concat(loginAPI.middleware), // ✅ add login API middleware
});

// ♻️ Persistor (for redux-persist)
export const persistedStore = persistStore(store);

// 🧠 TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
