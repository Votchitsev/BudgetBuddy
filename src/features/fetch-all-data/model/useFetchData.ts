import {
  useGetDailyExpenseQuery,
  useGetIncomeQuery,
  useGetPlannedBudgetQuery,
  useGetPlannedExpenseQuery,
} from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setDailyExpenses,setIncome, setPlan, setPlannedExpenseList } from '@shared/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchData = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  // const { dailyExpense } = useSelector((state: RootState) => state.dailyExpense);

  const {
    data: plannedBudgetData,
    isLoading: plannedBudgetIsLoading,
    isError: plannedBudgetError,
  } = useGetPlannedBudgetQuery({
    date: makeDateString({ year: date.year, month: date.month }),
    token: user?.token,
  });

  const {
    data: plannedExpenseData,
    isLoading: plannedExpenseIsLoading,
    isError: plannedExpenseError,
  } = useGetPlannedExpenseQuery({
    date: makeDateString({ year: date.year, month: date.month }),
    token: user?.token,
  });

  const {
    data: incomeData,
    isLoading: incomeIsLoading,
    isError: incomeError,
  } = useGetIncomeQuery({
    date: makeDateString({ year: date.year, month: date.month }),
    token: user?.token,
  });

  const {
    data: dailyExpenseData,
    isLoading: dailyExpenseIsLoading,
    isError: dailyExpenseError,
  } = useGetDailyExpenseQuery({
    date: makeDateString({ year: date.year, month: date.month }),
    token: user?.token,
  });

  useEffect(() => {
    if (plannedBudgetError) {
      return;
    }

    if (!plannedBudgetData) {
      return;
    }

    dispatch(
      setPlan(plannedBudgetData),
    );
  }, [dispatch, plannedBudgetData, plannedBudgetError]);

  useEffect(() => {
    if (plannedExpenseError) {
      return;
    }

    if (!plannedExpenseData) {
      return;
    }

    dispatch(
      setPlannedExpenseList(plannedExpenseData),
    );
  }, [plannedExpenseError, dispatch, plannedExpenseData]);

  useEffect(() => {
    if (incomeError) {
      return;
    }

    if (!incomeData) {
      return;
    }

    dispatch(
      setIncome(incomeData),
    );

  }, [dispatch, incomeData, incomeIsLoading, incomeError]);

  useEffect(() => {
    if (dailyExpenseError) {
      return;
    }

    if (!dailyExpenseData) {
      return;
    }

    dispatch(
      setDailyExpenses(dailyExpenseData),
    );
  },[dispatch, dailyExpenseData, dailyExpenseIsLoading, dailyExpenseError]);

  return {
    isLoading: plannedBudgetIsLoading || plannedExpenseIsLoading || incomeIsLoading || dailyExpenseIsLoading,
  };
};
