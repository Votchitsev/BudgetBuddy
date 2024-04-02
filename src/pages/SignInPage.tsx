import { SignInForm } from '@features/sign-in-user';
import { PageView } from '@shared/ui';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInPage = () => {
  return (
    <PageView>
      <h1>Вход</h1>
      <SignInForm />
      <LinkToSignUp>
        <Link to="/sign-up">Зарегистрироваться</Link>
      </LinkToSignUp>
    </PageView>
  );
};

const LinkToSignUp = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
