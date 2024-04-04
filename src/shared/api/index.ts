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
    getPlannedBudget: builder.query({
      query: ({ date, token }) => ({
        url: `/plan/${date}`,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
    getPlannedExpense: builder.query({
      query: ({ date, token }) => ({
        url: `/plan-expense/${date}`,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
    getUpdatedPlannedExpense: builder.mutation({
      query: ({ date, token }) => ({
        url: `/plan-expense/${date}`,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
    postPlannedExpense: builder.mutation({
      query: ({ body, token }) => ({
        url: '/plan-expense',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useVerifyUserQuery,
  useGetPlannedBudgetQuery,
  useGetPlannedExpenseQuery,
  usePostPlannedExpenseMutation,
  useGetUpdatedPlannedExpenseMutation,
} = api;
