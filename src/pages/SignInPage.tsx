import { SignInForm } from '@features/sign-in-user';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PageLayout } from './PageLayout';

export const SignInPage = () => {
  return (
    <PageLayout>
      <h1>Вход</h1>
      <SignInForm />
      <LinkToSignUp>
        <Link to="/sign-up">Зарегистрироваться</Link>
      </LinkToSignUp>
    </PageLayout>
  );
};

const LinkToSignUp = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
