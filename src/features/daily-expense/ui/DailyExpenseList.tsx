import { useModalContext } from '@entities/modal';
import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Modal } from './Modal';

export const DailyExpenseList = () => {
  const { dispatch } = useModalContext();
  const { dailyExpense } = useSelector((state: RootState) => state.dailyExpense);

  const onClickHandler = (date: string) => {
    dispatch({
      type: 'SET_MODAL',
      payload: (
        <Modal
          newExpenseHref={`/daily-expense/${date}`}
          date={date}
        />
      ),
    });
  };

  return (
    <TableView>
      <TableHead>
        <HeadCell>Дата</HeadCell>
        <HeadCell>Бюджет</HeadCell>
        <HeadCell>Траты</HeadCell>
        <HeadCell>Остаток</HeadCell>
      </TableHead>
      <TableBody>
        <TableBodyInner>
          { dailyExpense?.expenseData.map((item) => (
            <TableRow key={item.date} onClick={() => onClickHandler(item.date)}>
              <Cell>{ item.date.split('-')[2] }</Cell>
              <Cell>{ item.budget }</Cell>
              <Cell>{ item.amount }</Cell>
              <Cell>{ item.balance }</Cell>
            </TableRow>
          ))}
          <TableRow>
            <TotalCell>Итого: { dailyExpense?.outcomeBalance } ₽</TotalCell>
          </TableRow>
        </TableBodyInner>
      </TableBody>
    </TableView>
  );
};

const TableView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--secondary-color);
`;

const TableBody = styled.div`
  height: 90vh;
  overflow-y: auto;
`;

const TableBodyInner = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--secondary-color);
  min-height: 2rem;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 1rem; */
  color: var(--dark-color);
`;

const HeadCell = styled(Cell)`
  font-weight: 700;
`;

const TotalCell = styled(Cell)`
  grid-column-start: 3;
  grid-column-end: 5;
  font-weight: 700;
`;