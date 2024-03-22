import { MonthInput } from '@features/change-month';
import styled from 'styled-components';

import { PageLayout } from './PageLayout';

export const MainPage = () => {
  return (
    <PageLayout>
      <MonthInputContainer>
        <MonthInput />
      </MonthInputContainer>
    </PageLayout>
  );
};

const MonthInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
