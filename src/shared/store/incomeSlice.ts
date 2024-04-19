import { createSlice } from '@reduxjs/toolkit';
import { IIncome } from '@shared/types';

import { makeDateString } from '../lib';

export const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    income: {
      date: makeDateString({ year: new Date().getFullYear(), month: new Date().getMonth() }),
      total: 0,
      incomeList: [],
    } as IIncome,
  },
  reducers: {
    setIncome: (state, action) => {
      const { date, total, incomeList } = action.payload;
      state.income.date = date;
      state.income.total = total;
      state.income.incomeList = incomeList;
    },
  },
});

export const { setIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
