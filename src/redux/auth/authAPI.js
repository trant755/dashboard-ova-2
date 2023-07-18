import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.2.247:4004/api/auth",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    getsm: builder.mutation({
      query: () => ({
        url: "/getAllUsers",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetsmMutation } = authSlice;
