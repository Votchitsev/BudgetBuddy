import { MonthInput } from '@features/change-month';
import { useFetchData } from '@features/fetch-all-data';
import { PlannedBudgetCard } from '@features/show-planned-budget';
import styled from 'styled-components';

import { PageLayout } from './PageLayout';

export const MainPage = () => {
  const { isLoading } = useFetchData();
  return (
    <PageLayout>
      { isLoading ? (
        <span>Загрузка...</span>
      ) : (
        <>
          <MonthInputContainer>
            <MonthInput />
          </MonthInputContainer>
          <PlannedBudgetCard />
        </>
      ) }
    </PageLayout>
  );
};

const MonthInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;
