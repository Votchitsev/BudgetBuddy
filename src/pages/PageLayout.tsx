import { ModalProvider } from '@entities/modal';
import { useFetchData } from '@features/fetch-all-data';
import { Loader } from '@shared/ui/Loader';
import { Header } from '@widgets/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const PageLayout = () => {
  const { isLoading } = useFetchData();
  return (
    <ModalProvider>
      <Layout>
        <Header />
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
  max-width: 767px;
  margin: 0 auto;
`;
