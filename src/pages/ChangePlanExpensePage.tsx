import { ChangePlanExpenseForm } from '@features/change-plan-expense';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const ChangePlanExpensePage = () => {
  const { name } = useParams();

  return (
    <>
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
  color: var(--third);
`;
