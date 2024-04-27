import { Button, Input, Loader } from '@shared/ui';
import styled from 'styled-components';

import { useDailyExpense } from '../model/useDailyExpense';

export const DailyExpenseForm = () => {
  const { register, onSubmit, isLoading } = useDailyExpense();

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder='Сумма'
        type='number'
        { ...register('amount', { required: true }) }
      />
      <Button type='submit'>
        { isLoading ? <Loader forButton /> : 'Сохранить' }
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
