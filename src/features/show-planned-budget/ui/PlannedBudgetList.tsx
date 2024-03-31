import styled from 'styled-components';

export const PlannedBudgetList = () => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Статья</th>
          <th>Сумма</th>
        </tr>
      </TableHead>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid var(--secondary-color);
`;
