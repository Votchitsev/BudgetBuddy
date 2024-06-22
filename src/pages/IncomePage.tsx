import { IncomeList } from '@features/incomes/ui/IncomeList';
import { Button } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

export const IncomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <IncomeList />
      <Button
        onClick={() => navigate('/income/new', { state: { from: '/income' } })}
      >
        Новый доход
      </Button>
    </>
  );
};
