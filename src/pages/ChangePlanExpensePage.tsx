import { ChangePlanExpenseForm } from '@features/change-plan-expense';
import { ButtonBack } from '@shared/ui';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const ChangePlanExpensePage = () => {
  const { name } = useParams();

  return (
    <>
      <ButtonBack href='/plan' />
      <Title>{name}</Title>
      <ChangePlanExpenseForm />
    </>
  );
};

const Title = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 0;
  font-size: 1rem;
  color: var(--dark-color);
`;
