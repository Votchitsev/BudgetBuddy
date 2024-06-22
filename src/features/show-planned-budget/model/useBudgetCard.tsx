import { useNavigate } from 'react-router-dom';

export const useBudgetCard = () => {
  const navigate = useNavigate();

  const toBudgetList = () => {
    navigate('/plan', { state: { from: '/' } });
  };

  return {
    toBudgetList,
  };
};
