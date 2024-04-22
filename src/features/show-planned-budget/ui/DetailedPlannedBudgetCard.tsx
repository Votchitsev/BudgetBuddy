import { useModalContext } from '@entities/modal';
import styled from 'styled-components';

import { Modal } from './Modal';

interface IProps {
  title: string;
  amount: number;
  spent: number;
  id: number;
}

export const DetailedPlannedBudgetCard = ({ title, amount, spent, id }: IProps) => {
  const { dispatch } = useModalContext();

  const onClickHandler = () => {
    dispatch({
      type: 'SET_MODAL',
      payload: (
        <Modal
          newExpenseHref={`/plan-expense/change/${id}/${title}`}
          changePlanHref={`/plan/change/${id}`}
          plannedBudgetId={id}
        />
      ),
    });
  };

  return (
    <Card onClick={onClickHandler}>
      <Amount>{ amount } ₽</Amount>
      <div>{ title }</div>
      <Spent>Потрачено { spent } ₽</Spent>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: 6px;
  color: var(--dark-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: .5rem;
`;

const Spent = styled.div`
  font-size: 10px;
`;

const Amount = styled.div`
  font-weight: 700;
`;
