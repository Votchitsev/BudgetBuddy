import { RootState } from '@shared/store';
import type { DataTableRowClickEvent } from 'primereact/datatable';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useIncomeTable = () => {
  const { income } = useSelector((state: RootState) => state.income);
  const navigate = useNavigate();

  const handleRowClick = (e: DataTableRowClickEvent) => {
    navigate(`/income/${e.data.id}`, { state: { from: '/income' } });
  };

  return {
    income,
    handleRowClick,
  };
};

export default useIncomeTable;
