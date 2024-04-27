import { createSlice } from '@reduxjs/toolkit';

import type { IDailyExpenses } from '../types/dailyExpense';

export const dailyExpenseSlice = createSlice({
  name: 'dailyExpense',
  initialState: {
    dailyExpense: null as IDailyExpenses|null,
  },
  reducers: {
    setDailyExpenses: (state, action) => {
      state.dailyExpense = action.payload;
    },
  },
});

export const { setDailyExpenses } = dailyExpenseSlice.actions;
export default dailyExpenseSlice.reducer;
