import { delimit } from '@shared/lib';
import { RootState } from '@shared/store';
import { BudgetCard } from '@shared/ui';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const IncomeCard = () => {
  const { income } = useSelector((state: RootState) => state.income);
  const navigate = useNavigate();

  return (
    <BudgetCard
      title="Доходы"
      onClickHandler={() => navigate('/income', { state: { from: '/' } })}
    >
      <span>{ delimit(income.total) } ₽</span>
    </BudgetCard>
  );
};
