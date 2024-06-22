import { DailyExpenseForm } from '@features/daily-expense';
import { useParams } from 'react-router-dom';

export const ChangeDailyExpensePage = () => {
  const { date } = useParams();
  return (
    <>
      <h1>{ date && new Date(date).toLocaleDateString('ru') }</h1>
      <DailyExpenseForm />
    </>
  );
};
