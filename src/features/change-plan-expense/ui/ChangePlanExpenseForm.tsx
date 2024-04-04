import { Button, Input } from '@shared/ui';
import styled from 'styled-components';

import { useChangePlanExpenseForm } from '../model/useChangePlanExpense';

export const ChangePlanExpenseForm = () => {
  const { register, onSubmit, isLoading } = useChangePlanExpenseForm();

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder='Сумма'
          type='number'
          { ...register('amount', { required: true }) }
        />
        <Button type='submit'>
          { isLoading ? (
            <span>Загрузка...</span>
          ) : (
            <span>Сохранить</span>
          )}
        </Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
