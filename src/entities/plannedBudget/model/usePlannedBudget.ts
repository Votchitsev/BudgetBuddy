import { useGetPlannedBudgetQuery } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState } from '@shared/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IPlannedBudget } from './types';


export const usePlannedBudget = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  const { data, isLoading: getIsLoading } = useGetPlannedBudgetQuery({
    date: makeDateString({ year: date.year, month: date.month }),
    token: user?.token,
  });

  useEffect(() => {
    if (getIsLoading) {
      setIsLoading(true);
      return;
    }

    setIsLoading(false);
  }, [getIsLoading]);

  return {
    plannedBudget: data as IPlannedBudget,
    isLoading,
  };
};
