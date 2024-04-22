import { Button, Input, Loader } from '@shared/ui';
import styled from 'styled-components';

import { useNewPlannedBudgetForm } from '../model/useNewPlannedBudgetForm';

export const NewPlannedBudgetForm = () => {
  const { register, onSubmit, isLoading } = useNewPlannedBudgetForm();

  return (
    <Form onSubmit={onSubmit}>
      <p>Новый расход</p>
      <Input placeholder='Название' type='text' {...register('name', { required: true })} />
      <Input placeholder='Сумма' type='number' {...register('amount', { required: true })} />
      <Button type='submit'>
        { isLoading ? <Loader forButton /> : <span>'Сохранить'</span> }
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
