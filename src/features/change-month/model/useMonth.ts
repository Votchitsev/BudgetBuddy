import { RootState, setDate } from '@shared/store';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useMonth = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);

  const handleSetMonth = useCallback((month: number, year: number) => {
    dispatch(
      setDate({
        month,
        year,
      }),
    );
  }, [dispatch]);

  return {
    handleSetMonth,
    current: {
      month: date.month,
      year: date.year,
    },
  };
};
