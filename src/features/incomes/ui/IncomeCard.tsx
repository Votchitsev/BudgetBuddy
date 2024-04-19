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
      onClickHandler={() => navigate('/income')}
    >
      <span>{ income.total } ₽</span>
    </BudgetCard>
  );
};
