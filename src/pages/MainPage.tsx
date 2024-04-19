import { IncomeCard } from '@features/incomes';
import { PlannedBudgetCard } from '@features/show-planned-budget';

export const MainPage = () => {
  return (
    <>
      <IncomeCard />
      <PlannedBudgetCard />
    </>
  );
};
