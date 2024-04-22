import type { IPlannedBudgetItem } from '@entities/plannedBudget';
import { Button, Input, Loader } from '@shared/ui';
import styled from 'styled-components';

import { useChangePlan } from '../model/useChangePlan';

interface IProps {
  planItem: IPlannedBudgetItem
}

export const ChangePlanForm = ({ planItem }: IProps) => {
  const { register, onSubmit, isLoading } = useChangePlan();

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder='Название'
        type='text'
        { ...register('name', { required: true }) }
        defaultValue={planItem?.name}
      />
      <Input
        placeholder='Сумма'
        type='number'
        { ...register('amount', { required: true }) }
        defaultValue={planItem?.amount}
      />
      <Button type='submit'>
        { isLoading ? (
          <Loader forButton />
        ) : (
          <span>Сохранить</span>
        )}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;