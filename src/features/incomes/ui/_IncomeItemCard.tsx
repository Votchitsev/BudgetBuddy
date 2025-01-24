import { delimit } from '@shared/lib';
import type { IIncomeItem } from '@shared/types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  income: IIncomeItem;
}

export const IncomeItemCard = ({ income }: IProps) => {
  const navigate = useNavigate();

  return (
    <IncomeItemView onClick={() => navigate(`/income/${income.id}`, { state: { from: '/income' } })}>
      <div>{ income.name }</div>
      <Amount>{ delimit(income.amount) } ₽</Amount>
    </IncomeItemView>
  );
};

const IncomeItemView = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: .5rem;
`;

const Amount = styled.div`
  font-weight: 700;
`;
