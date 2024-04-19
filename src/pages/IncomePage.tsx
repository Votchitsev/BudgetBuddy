import { IncomeList } from '@features/incomes/ui/IncomeList';
import { Button, ButtonBack } from '@shared/ui';
import { useNavigate } from 'react-router-dom';

export const IncomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <ButtonBack href='/' />
      <IncomeList />
      <Button
        onClick={() => navigate('/income/new')}
      >
        Новый доход
      </Button>
    </>
  );
};
