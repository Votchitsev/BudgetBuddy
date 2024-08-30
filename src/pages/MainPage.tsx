import { TotalSavingsCard } from '@entities/savings';
import { DailyExpenseCard } from '@features/daily-expense';
import { IncomeCard } from '@features/incomes';
import { PlannedBudgetCard } from '@features/show-planned-budget';

export const MainPage = () => {
  return (
    <>
      <IncomeCard />
      <PlannedBudgetCard />
      <DailyExpenseCard />
      <TotalSavingsCard />
    </>
  );
};
