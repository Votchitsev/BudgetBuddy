import { useGetPlannedBudgetQuery, useGetPlannedExpenseQuery } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setPlan, setPlannedExpenseList } from '@shared/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchData = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);

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

  return {
    isLoading: plannedBudgetIsLoading || plannedExpenseIsLoading,
  };
};
