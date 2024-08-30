import { IncomeForm } from '@features/incomes';
import { RootState } from '@shared/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const ChangeIncomePage = () => {
  const { id } = useParams();
  const { income } = useSelector((state: RootState) => state.income);

  const incomeById = useMemo(() => {
    return income.incomeList.find((item) => item.id === Number(id));
  }, [id, income.incomeList]);

  return (
    <>
      <Title>{ incomeById && incomeById.name || 'Новый доход' }</Title>
      <IncomeForm income={incomeById} />
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
