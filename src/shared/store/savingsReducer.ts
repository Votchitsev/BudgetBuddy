import { createSlice } from '@reduxjs/toolkit';

const savingsSlice = createSlice({
  name: 'savings',
  initialState: {
    percent: 0,
    amount: 0,
  },
  reducers: {
    setSavings(state, action) {
      state = action.payload;
      return state;
    },
    getSavings: (state) => {
      return state;
    },
  },
});

export const { setSavings, getSavings } = savingsSlice.actions;
export default savingsSlice.reducer;
