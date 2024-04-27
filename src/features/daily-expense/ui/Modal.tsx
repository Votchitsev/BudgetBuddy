
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDeleteDailyExpense } from '../model/useDeleteDailyExpense';

interface IProps {
  newExpenseHref: string;
  date: string;
}

export const Modal = ({ newExpenseHref, date }: IProps) => {
  const { onDeleteDailyExpense } = useDeleteDailyExpense();
  return (
    <Links>
      <Link to={newExpenseHref}>Добавить трату</Link>
      <div onClick={() => onDeleteDailyExpense(date)}>Сбросить траты</div>
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;