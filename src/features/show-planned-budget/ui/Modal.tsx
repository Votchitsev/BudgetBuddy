import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  newExpenseHref: string;
  changePlanHref: string;
}

export const Modal = ({ newExpenseHref, changePlanHref }: IProps) => {
  return (
    <Links>
      <Link to={newExpenseHref}>Добавить трату</Link>
      <Link to={changePlanHref}>Изменить плановую сумму</Link>
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
