
import { IPlannedExpense } from '@entities/plannedExpense';
import { RootState } from '@shared/index';
import { Button } from '@shared/ui';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { DetailedPlannedBudgetCard } from './DetailedPlannedBudgetCard';

export const PlannedBudgetList = () => {
  const navigate = useNavigate();
  const { expenseList } = useSelector((state: RootState) => state.plannedExpense) as IPlannedExpense;

  const onClickHandler = () => {
    navigate('/plan-expense/change/new');
  };

  return (
    <>
      { expenseList.map((item) => (
        <DetailedPlannedBudgetCard
          key={item.id}
          id={item.id}
          title={item.name}
          amount={item.plannedAmount}
          spent={item.expenseAmount}
        />
      )) }
      <Button
        onClick={onClickHandler}
      >
        Добавить планируемый расход
      </Button>
    </>
  );
};
