// src/features/users/usersAPI.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDomain } from "../../utilis/APIDomain";

//
// 🧠 User Types
//
export type TUser = {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  contact_phone?: string;
  address?: string;
  city?: string;
  role: "user" | "admin";
  isVerified: boolean;
  image_url?: string;
  created_at?: string;
};

export type TRegisterUser = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  contact_phone?: string;
  address?: string;
  city?: string;
  role?: string;
  image_url?: string;
};

export type TLoginUser = {
  email: string;
  password: string;
};

export type TVerifyUser = {
  email: string;
  code: string;
};

export type TAuthResponse = {
  message: string;
  token?: string;
  user?: TUser;
};

//
// ⚡ Users API
//
export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiDomain,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      // Optionally attach JWT if stored
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    //
    // 🧩 Register user
    //
    registerUser: builder.mutation<{ message: string }, TRegisterUser>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    //
    // 🧩 Verify user (email verification)
    //
    verifyUser: builder.mutation<{ message: string }, TVerifyUser>({
      query: (body) => ({
        url: "/auth/verify",
        method: "POST",
        body,
      }),
    }),

    //
    // 🧩 Login user
    //
    loginUser: builder.mutation<TAuthResponse, TLoginUser>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    //
    // 🧩 Get all users
    //
    getUsers: builder.query<TUser[], void>({
      query: () => "/users",
      transformResponse: (response: { data: any[] }) =>
        response.data.map((u) => ({
          user_id: u.user_id,
          firstname: u.firstname,
          lastname: u.lastname,
          email: u.email,
          contact_phone: u.contact_phone,
          address: u.address,
          city: u.city,
          role: u.role,
          isVerified: u.isVerified,
          image_url: u.image_url,
          created_at: u.created_at,
        })),
      providesTags: ["Users"],
    }),

    //
    // 🧩 Get user by ID
    //
    getUserById: builder.query<TUser, number>({
      query: (id) => `/users/${id}`,
      transformResponse: (response: { data: any }) => response.data,
    }),

    //
    // 🧩 Update user
    //
    updateUser: builder.mutation<{ message: string }, Partial<TUser> & { id: number }>({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    //
    // 🧩 Delete user
    //
    deleteUser: builder.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    //
    // 🧩 Get user with orders
    //
    getUserWithOrders: builder.query<any, number>({
      query: (id) => `/users/${id}/orders`,
    }),

    //
    // 🧩 Get user with payments
    //
    getUserWithPayments: builder.query<any, number>({
      query: (id) => `/users/${id}/payments`,
    }),

    //
    // 🧩 Get full user details (orders + items + payments + deliveries)
    //
    getUserFullDetails: builder.query<any, number>({
      query: (id) => `/users/${id}/details`,
    }),
  }),
});

//
// ⚡ Export Auto Hooks
//
export const {
  useRegisterUserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserWithOrdersQuery,
  useGetUserWithPaymentsQuery,
  useGetUserFullDetailsQuery,
} = usersAPI;
