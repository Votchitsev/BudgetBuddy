import { createSlice } from '@reduxjs/toolkit';

export interface IApiError {
  data: string;
  status: number;
}

const initialState: { apiError: IApiError | null } = {
  apiError: null,
};

export const apiErrorSlice = createSlice({
  name: 'apiError',
  initialState,
  reducers: {
    setApiError: (state, action) => {
      const { data, status } = action.payload;
      state.apiError = {
        data,
        status,
      };
    },
    clearApiError: (state) => {
      state.apiError = null;
    },
  },
});

export const { setApiError, clearApiError } = apiErrorSlice.actions;
export default apiErrorSlice.reducer;
