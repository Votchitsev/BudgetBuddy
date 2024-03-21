import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://45.140.146.226:5002/' }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    verifyUser: builder.query({
      query: (token) => ({
        url: '/auth/verify',
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useVerifyUserQuery } = api;
