import { useDeleteDailyExpenseMutation } from '@shared/api';
import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';

export const useDeleteDailyExpense = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [deleteDailyExpense] = useDeleteDailyExpenseMutation();

  const onDeleteDailyExpense = async (date: string) => {
    await deleteDailyExpense({ date, token: user?.token });
  };

  return {
    onDeleteDailyExpense,
  };
};
