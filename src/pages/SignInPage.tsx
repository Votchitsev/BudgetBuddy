import { SignInForm } from '@features/sign-in-user';
import { AuthPageLayout, AuthPanel,PageView  } from '@shared/ui';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInPage = () => {
  return (
    <PageView>
      <AuthPageLayout>
        <div />
        <AuthPanel header="Вход">
          <SignInForm />
          <LinkToSignUp>
            <Link to="/sign-up">
              <Button link>Зарегистрироваться</Button>
            </Link>
          </LinkToSignUp>
        </AuthPanel>
      </AuthPageLayout>
    </PageView>
  );
};

const LinkToSignUp = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
