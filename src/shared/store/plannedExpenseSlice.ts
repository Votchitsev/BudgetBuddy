import { createSlice } from '@reduxjs/toolkit';
import { makeDateString } from '@shared/lib';

const plannedExpenseSlice = createSlice({
  name: 'plannedExpense',
  initialState: {
    date: makeDateString({ year: new Date().getFullYear(), month: new Date().getMonth() }),
    expenseList: [],
  },
  reducers: {
    setPlannedExpenseList(state, action) {
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    },
  },
});

export const { setPlannedExpenseList } = plannedExpenseSlice.actions;
export default plannedExpenseSlice.reducer;
