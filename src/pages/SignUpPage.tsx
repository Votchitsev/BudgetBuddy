import { SignUpForm } from '@features/sign-up-user';
import { AuthPageLayout, AuthPanel, Back, PageView } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <PageView>
      <AuthPageLayout>
        <Back label='Авторизация' handleClick={() => navigate('/sign-in')} />
        <AuthPanel header="Регистрация">
          <SignUpForm />
        </AuthPanel>
      </AuthPageLayout>
    </PageView>
  );
};
