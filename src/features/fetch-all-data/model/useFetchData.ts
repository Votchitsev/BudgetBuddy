import { useGetPlannedBudgetQuery } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setPlan } from '@shared/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchData = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  const { data, isLoading: getIsLoading, isError: getPlanError } = useGetPlannedBudgetQuery({
    date: makeDateString({ year: date.year, month: date.month }),
    token: user?.token,
  });

  useEffect(() => {
    if (getPlanError) {
      return;
    }

    if (!data) {
      return;
    }

    dispatch(
      setPlan(data),
    );
  }, [dispatch, data, getPlanError]);

  return {
    isLoading: getIsLoading,
  };
};
