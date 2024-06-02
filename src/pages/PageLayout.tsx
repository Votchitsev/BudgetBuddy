import { ModalProvider } from '@entities/modal';
import { MonthSwitcher } from '@features/change-month';
import { useFetchData } from '@features/fetch-all-data';
import { LogoutButton } from '@features/logout';
import { Loader } from '@shared/ui/Loader';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const PageLayout = () => {
  const { isLoading } = useFetchData();
  return (
    <ModalProvider>
      <Layout>
        <TopContainer>
          <MonthInputContainer>
            <MonthSwitcher />
          </MonthInputContainer>
          <LogoutButton />
        </TopContainer>
        { isLoading ? (
          <Loader />
        ) : (
          <Outlet />
        ) }
      </Layout>
    </ModalProvider>
  );
};

const Layout = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const MonthInputContainer = styled.div`
  display: flex;
  max-width: 100px;
`;