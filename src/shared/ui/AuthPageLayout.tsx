import { type FC,PropsWithChildren } from 'react';
import styled from 'styled-components';

const AuthPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

const Layout = styled.section`
  height: 90dvh;
  display: grid;
  grid-template-rows: 5% 95%;
`;

export default AuthPageLayout;
