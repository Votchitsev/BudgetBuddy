import { IPlannedBudgetItem } from '@entities/plannedBudget';
import { ChangePlanForm } from '@features/change-plan';
import { RootState } from '@shared/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ChangePlanPage = () => {
  const { id } = useParams();
  const { plannedBudgetList } = useSelector((state: RootState) => state.plan);
  const planById = useMemo(() => {
    return plannedBudgetList.find((item: IPlannedBudgetItem) => item.id === Number(id));
  }, [id, plannedBudgetList]);

  return (
    <>
      <ChangePlanForm planItem={planById!} />
    </>
  );
};
