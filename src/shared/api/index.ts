import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://45.140.146.226:5002/' }),
  tagTypes: ['PlannedBudget', 'Income', 'DailyExpense'],
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
      providesTags: ['PlannedBudget'],
    }),
    putPlannedBudget: builder.mutation({
      query: ({ body, token }) => ({
        url: '/plan',
        method: 'PUT',
        headers: {
          Authorization: token,
        },
        body,
      }),
      invalidatesTags: ['PlannedBudget', 'DailyExpense'],
    }),
    getPlannedExpense: builder.query({
      query: ({ date, token }) => ({
        url: `/plan-expense/${date}`,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ['PlannedBudget'],
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
      invalidatesTags: ['PlannedBudget'],
    }),
    deletePlannedExpense: builder.mutation({
      query: ({ id, token }) => ({
        url: `/plan-expense/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['PlannedBudget'],
    }),
    postPlannedBudget: builder.mutation({
      query: ({ body, token }) => ({
        url: '/plan',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body,
      }),
      invalidatesTags: ['PlannedBudget'],
    }),
    getIncome: builder.query({
      query: ({ date, token }) => ({
        url: `/income/${date}`,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ['Income'],
    }),
    postIncome: builder.mutation({
      query: ({ body, token }) => ({
        url: '/income',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body,
      }),
      invalidatesTags: ['Income'],
    }),
    putIncome: builder.mutation({
      query: ({ body, token }) => ({
        url: '/income',
        method: 'PUT',
        headers: {
          Authorization: token,
        },
        body,
      }),
      invalidatesTags: ['Income'],
    }),
    getDailyExpense: builder.query({
      query: ({ date, token }) => ({
        url: `/daily/${date}`,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ['DailyExpense', 'PlannedBudget'],
    }),
    postDailyExpense: builder.mutation({
      query: ({ body, token }) => ({
        url: '/daily',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body,
      }),
      invalidatesTags: ['DailyExpense'],
    }),
    deleteDailyExpense: builder.mutation({
      query: ({ date, token }) => ({
        url: `/daily/${date}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['DailyExpense'],
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
  usePostPlannedBudgetMutation,
  useGetIncomeQuery,
  usePostIncomeMutation,
  usePutIncomeMutation,
  usePutPlannedBudgetMutation,
  useDeletePlannedExpenseMutation,
  useGetDailyExpenseQuery,
  usePostDailyExpenseMutation,
  useDeleteDailyExpenseMutation,
} = api;
