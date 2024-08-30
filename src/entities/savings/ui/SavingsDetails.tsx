import { RootState } from '@shared/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface IProps {}

export const SavingsDetails: FC<IProps> = () => {
  const savingsPercent = useSelector((state: RootState) => state.savings);
  const { dailyExpense } = useSelector((state: RootState) => state.dailyExpense);

  return (
    <SavingsDetailsView>
      <SavingsDetailsItem>
        <span>Процент сбережений: </span>
        <span>{ savingsPercent.percent } %</span>
      </SavingsDetailsItem>
      <SavingsDetailsItem>
        <span>Будет накоплено через месяц: </span>
        <span>{ savingsPercent.amount } ₽</span>
      </SavingsDetailsItem>
      <SavingsDetailsItem>
        <span>Будет накоплено через 3 месяца: </span>
        <span>{ savingsPercent.amount * 3 } ₽</span>
      </SavingsDetailsItem>
      <SavingsDetailsItem>
        <span>Будет накоплено через год: </span>
        <span>{ savingsPercent.amount * 12 } ₽</span>
      </SavingsDetailsItem>
      <SavingsDetailsItem>
        <span>Можно тратить в день: </span>
        <span>{ dailyExpense?.expenseData[0].budget } ₽</span>
      </SavingsDetailsItem>
    </SavingsDetailsView>
  );
};

const SavingsDetailsView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SavingsDetailsItem = styled.div`
  font-size: 0.8rem;
`;
