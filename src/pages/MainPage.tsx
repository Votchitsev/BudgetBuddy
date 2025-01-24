import { TotalSavingsCard } from '@entities/savings';
import { DailyExpenseCard } from '@features/daily-expense';
import { IncomeCard } from '@features/incomes';
import { PlannedBudgetCard } from '@features/show-planned-budget';
import styled from 'styled-components';

export const MainPage = () => {
  return (
    <MainPageContentLayout>
      <IncomeCard />
      <PlannedBudgetCard />
      <DailyExpenseCard />
      <TotalSavingsCard />
    </MainPageContentLayout>
  );
};

const MainPageContentLayout = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;
