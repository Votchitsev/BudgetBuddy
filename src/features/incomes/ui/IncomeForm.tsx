import type { IIncomeItem } from '@shared/types';
import { Button, Input, Loader } from '@shared/ui';
import styled from 'styled-components';

import { useIncomeForm } from '../model/useIncomeForm';

interface IProps {
  income?: IIncomeItem;
}

export const IncomeForm = ({ income }: IProps) => {
  const {
    register,
    onChangeIncomeSubmit,
    onNewIncomeSubmit,
    isLoading,
  } = useIncomeForm(income?.id.toString());

  return (
    <Form onSubmit={income ? onChangeIncomeSubmit : onNewIncomeSubmit}>
      <Input
        placeholder='Название'
        {...register('name', { required: true })}
        defaultValue={income?.name}
      />
      <Input
        placeholder='Сумма'
        {...register('amount', { required: true })}
        defaultValue={income?.amount}
        type='number'
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
