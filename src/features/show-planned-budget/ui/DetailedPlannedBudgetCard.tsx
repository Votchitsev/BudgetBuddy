import styled from 'styled-components';

interface IProps {
  title: string;
  amount: number;
  spent: number;
}

export const DetailedPlannedBudgetCard = ({ title, amount, spent }: IProps) => {
  return (
    <Card>
      <div>{ amount } ₽</div>
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
