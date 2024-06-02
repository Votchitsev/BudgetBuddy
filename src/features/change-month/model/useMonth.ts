import { RootState, setDate } from '@shared/store';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Action = 'next'|'prev';

export const useMonth = () => {
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const [hasNextMonth, setHasNextMonth] = useState(false);

  const handleSetMonth = useCallback((action: Action) => {
    if (action === 'next') {
      const month = date.month < 11 ? date.month + 1 : 0;
      const year = date.month < 11 ? date.year : date.year + 1;
      dispatch(
        setDate({
          month,
          year,
        }),
      );
    }

    if (action === 'prev') {
      const month = date.month > 0 ? date.month - 1 : 11;
      const year = date.month > 0 ? date.year : date.year - 1;

      dispatch(
        setDate({
          month,
          year,
        }),
      );
    }
  }, [dispatch, date.month, date.year]);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    if (currentMonth !== date.month && date.year === currentYear || date.year < currentYear) {
      setHasNextMonth(true);
      return;
    }

    setHasNextMonth(false);
  }, [date.month, date.year]);

  return {
    handleSetMonth,
    hasNextMonth,
    current: {
      month: {
        value: date.month,
        name: monthMap.get(date.month),
      },
      year: date.year,
    },
  };
};

const monthMap = new Map([
  [0, 'Январь'],
  [1, 'Февраль'],
  [2, 'Март'],
  [3, 'Апрель'],
  [4, 'Май'],
  [5, 'Июнь'],
  [6, 'Июль'],
  [7, 'Август'],
  [8, 'Сентябрь'],
  [9, 'Октябрь'],
  [10, 'Ноябрь'],
  [11, 'Декабрь'],
]);
