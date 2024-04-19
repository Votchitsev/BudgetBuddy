import { RootState } from '@shared/store';
import { BudgetCard } from '@shared/ui';
import { useSelector } from 'react-redux';

import { useBudgetCard } from '../model/useBudgetCard';

export const PlannedBudgetCard = () => {
  const { toBudgetList } = useBudgetCard();
  const { total } = useSelector((state: RootState) => state.plan);

  return (
    <BudgetCard
      title="Плановые расходы"
      onClickHandler={toBudgetList}
    >
      <span>{ total } ₽</span>
    </BudgetCard>
  );
};
