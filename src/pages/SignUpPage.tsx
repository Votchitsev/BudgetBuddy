import { SignUpForm } from '@features/sign-up-user';

import { PageLayout } from './PageLayout';

export const SignUpPage = () => {
  return (
    <PageLayout>
      <h1>Регистрация</h1>
      <SignUpForm />
    </PageLayout>
  );
};
