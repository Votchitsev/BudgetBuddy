import { useNavigate } from 'react-router-dom';

export const useBudgetCard = () => {
  const navigate = useNavigate();

  const toBudgetList = () => {
    navigate('/new-plan');
  };

  return {
    toBudgetList,
  };
};
