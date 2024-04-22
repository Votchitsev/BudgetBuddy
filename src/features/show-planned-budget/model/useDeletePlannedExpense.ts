import { useDeletePlannedExpenseMutation } from '@shared/api';
import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';

export const useDeletePlannedExpense = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [deletePlannedExpense] = useDeletePlannedExpenseMutation();

  const onDeletePlannedExpense = async (id: number) => {
    await deletePlannedExpense({ id, token: user?.token });
  };

  return {
    onDeletePlannedExpense,
  };
};
