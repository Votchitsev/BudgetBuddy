import { MonthInput } from '@features/change-month';
import { useFetchData } from '@features/fetch-all-data';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const PageLayout = () => {
  const { isLoading } = useFetchData();
  return (
    <Layout>
      <MonthInputContainer>
        <MonthInput />
      </MonthInputContainer>
      { isLoading ? (
        <span>Загрузка...</span>
      ) : (
        <Outlet />
      ) }
    </Layout>
  );
};

const Layout = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MonthInputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;
