import { useGetSavingsQuery } from '@shared/api';
import {  makeDateString } from '@shared/lib';
import { RootState, setSavings } from '@shared/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useSavings = () => {
  const savings = useSelector((state: RootState) => state.savings);
  const { user } = useSelector((state: RootState) => state.user);
  const { date } = useSelector((state: RootState) => state.date);
  const dispatch = useDispatch();

  const { data } = useGetSavingsQuery({
    token: user?.token,
    date: makeDateString({ year: date.year, month: date.month }),
  });

  useEffect(() => {
    if (data) {
      dispatch(
        setSavings({
          percent: data.percent,
          amount: data.amount,
        }),
      );
    } else {
      dispatch(setSavings({ percent: 0, amount: 0 }));
    }
  }, [data, dispatch]);

  return {
    savingsPercent: savings,
    data,
  };
};
