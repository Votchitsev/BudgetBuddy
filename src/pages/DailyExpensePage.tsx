import { DailyExpenseList } from '@features/daily-expense';
import { ButtonBack } from '@shared/ui';

export const DailyExpensePage = () => {
  return (
    <>
      <ButtonBack href='/' />
      <DailyExpenseList />
    </>
  );
};
