import { BudgetCard } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

import { useSavings } from '../model/useSavings';

export const TotalSavingsCard = () => {
  const navigate = useNavigate();
  const { savingsPercent } = useSavings();

  return (
    <BudgetCard
      title="Процент сбережений"
      onClickHandler={ () => navigate('/savings') }
    >
      <span>{ savingsPercent.percent } %</span>
    </BudgetCard>
  );
};
