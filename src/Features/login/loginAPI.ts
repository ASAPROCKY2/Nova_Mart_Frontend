// src/Features/users/loginAPI.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utilis/APIDomain";

//
// 🧩 Types
//
export type TLoginResponse = {
  message: string;
  token: string;
  user: {
    user_id: number;
    firstname: string;
    lastname: string;
    email: string;
    contact_phone?: string | null;
    address?: string | null;
    city?: string | null;
    role: string;
    image_url?: string | null;
    exp: number;
  };
};

export type LoginInputs = {
  email: string;
  password: string;
};

//
// ⚡ RTK Query API
//
export const loginAPI = createApi({
  reducerPath: "loginAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiDomain,
    credentials: "include", // allows cookies if needed in the future
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    //
    // 🧠 LOGIN USER MUTATION
    //
    loginUser: builder.mutation<TLoginResponse, LoginInputs>({
      query: (loginData) => ({
        url: "/users/login", // ✅ Matches your Express backend route
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

//
// 🚀 Export the auto-generated hook
//
export const { useLoginUserMutation } = loginAPI;
