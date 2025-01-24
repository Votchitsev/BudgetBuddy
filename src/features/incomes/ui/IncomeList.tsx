import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import useIncomeTable from '../model/useIncomesTable';

export const IncomeList = () => {
  const { income, handleRowClick } = useIncomeTable();

  return (
    <DataTable value={income.incomeList} onRowClick={handleRowClick} tableStyle={{ cursor: 'pointer' }}>
      <Column field="name" header="Доход" />
      <Column field="amount" header="Сумма" align="right" dataType='numeric' />
    </DataTable>
  );
};
