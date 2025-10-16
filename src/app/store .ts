// src/app/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ✅ Import your APIs
import { usersAPI } from "../Features/users/userAPI"; // <-- make sure this path matches your folder

// ⚙️ Redux Persist Configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // add slice names here once you create them
};

// 🧩 Combine all reducers
const rootReducer = combineReducers({
  // user: userReducer, // add reducers here later
  [usersAPI.reducerPath]: usersAPI.reducer, // ✅ connect API reducer
});

// 🧱 Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🏪 Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable check for persist
    }).concat(usersAPI.middleware), // ✅ add API middleware
});

// ♻️ Persistor (for redux-persist)
export const persistedStore = persistStore(store);

// 🧠 TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
