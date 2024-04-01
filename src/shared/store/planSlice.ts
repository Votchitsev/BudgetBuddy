import { createSlice } from '@reduxjs/toolkit';
import { makeDateString } from '@shared/lib';

const initialState = {
  date: makeDateString({ year: new Date().getFullYear(), month: new Date().getMonth() }),
  total: 0,
  plannedBudgetList: [],
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlan: (state, action) => {
      const { date, total, plannedBudgetList } = action.payload;
      state.date = date;
      state.total = total;
      state.plannedBudgetList = plannedBudgetList;
    },
  },
});

export const { setPlan } = planSlice.actions;
export default planSlice.reducer;
