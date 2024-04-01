
import { IPlannedExpense } from '@entities/plannedExpense';
import { RootState } from '@shared/index';
import { Button } from '@shared/ui';
import { useSelector } from 'react-redux';

import { DetailedPlannedBudgetCard } from './DetailedPlannedBudgetCard';

export const PlannedBudgetList = () => {
  const { expenseList } = useSelector((state: RootState) => state.plannedExpense) as IPlannedExpense;
  return (
    expenseList.length ? (
      expenseList.map((item) => (
        <DetailedPlannedBudgetCard
          key={item.id}
          title={item.name}
          amount={item.plannedAmount}
          spent={item.expenseAmount}
        />
      ))
    ) : (
      <Button
        onClick={() => {}}
      >
        Добавить планируемый расход
      </Button>
    )
  );
};
