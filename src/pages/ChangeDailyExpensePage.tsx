import { DailyExpenseForm } from '@features/daily-expense';
import { ButtonBack } from '@shared/ui';
import { useParams } from 'react-router-dom';

export const ChangeDailyExpensePage = () => {
  const { date } = useParams();
  return (
    <>
      <ButtonBack href='/daily-expense' />
      <h1>{date}</h1>
      <DailyExpenseForm />
    </>
  );
};