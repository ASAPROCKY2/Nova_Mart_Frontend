import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//
// 🧩 Define the User type (based on your API and database)
//
export type User = {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  contact_phone?: string | null;
  address?: string | null;
  city?: string | null;
  role: "user" | "admin";
  image_url?: string | null;
};

//
// 🧩 Define the Slice State
//
export interface UserState {
  token: string | null;
  user: User | null;
}

const initialState: UserState = {
  token: null,
  user: null,
};

//
// 🧩 Create the userSlice
//
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //
    // ✅ When login is successful
    //
    loginSuccess: (
      state,
      action: PayloadAction<{
        token: string;
        user: User;
      }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;

      // Persist in localStorage for session continuity
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },

    //
    // ✅ Load user from localStorage (for persistence after reload)
    //
    loadUserFromStorage: (state) => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (token && user) {
        state.token = token;
        state.user = JSON.parse(user);
      }
    },

    //
    // ✅ Logout user (clear store + localStorage)
    //
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

//
// 🧩 Export actions
//
export const { loginSuccess, loadUserFromStorage, logout } = userSlice.actions;

//
// 🧩 Export reducer
//
export default userSlice.reducer;
