import { Button, Input } from '@shared/ui';

import { PageLayout } from './PageLayout';

export const TestPage = () => {
  return (
    <PageLayout>
      <h1>Авторизация</h1>
      <Input />
      <Button>ОК</Button>
    </PageLayout>
  );
};
