import { RootState } from '@shared/store';
import { BudgetCard } from '@shared/ui';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const DailyExpenseCard = () => {
  const navigate = useNavigate();
  const { dailyExpense } = useSelector((state: RootState) => state.dailyExpense);

  const onClickHandler = () => {
    navigate('/daily-expense');
  };

  return (
    <BudgetCard
      title={'Ежедневный расход'}
      onClickHandler={onClickHandler}
    >
      <span> Можно тратить { dailyExpense?.allowedExpense } ₽</span>
    </BudgetCard>
  );
};