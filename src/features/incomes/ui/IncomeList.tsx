import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';

import { IncomeItemCard } from './IncomeItemCard';

export const IncomeList = () => {
  const { income } = useSelector((state: RootState) => state.income);

  return (
    <>
      { income.incomeList.map((item) => (
        <IncomeItemCard key={item.id} income={item} />
      ))}
    </>
  );
};
