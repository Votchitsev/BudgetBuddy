import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDeletePlannedExpense } from '../model/useDeletePlannedExpense';

interface IProps {
  newExpenseHref: string;
  changePlanHref: string;
  plannedBudgetId: number;
}

export const Modal = ({ newExpenseHref, changePlanHref, plannedBudgetId }: IProps) => {
  const { onDeletePlannedExpense } = useDeletePlannedExpense();
  return (
    <Links>
      <Link to={newExpenseHref} state={{ from: '/plan' }}>Добавить трату</Link>
      <Link to={changePlanHref} state={{ from: '/plan' }}>Изменить плановую сумму</Link>
      <div onClick={() => onDeletePlannedExpense(plannedBudgetId)}>Сбросить траты</div>
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
