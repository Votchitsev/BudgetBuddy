import { SignUpForm } from '@features/sign-up-user';
import { PageView } from '@shared/ui';

export const SignUpPage = () => {
  return (
    <PageView>
      <h1>Регистрация</h1>
      <SignUpForm />
    </PageView>
  );
};
