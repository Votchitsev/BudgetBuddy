import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetPlannedExpenseQuery, useGetUpdatedPlannedExpenseMutation, usePostPlannedExpenseMutation } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setApiError, setPlannedExpenseList } from '@shared/store';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import type { Inputs } from './types';
import { IPlannedExpense } from '@entities/plannedExpense';

export const useChangePlanExpenseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Inputs>();
  const [postData, { isLoading, isSuccess, isError, data, error }] = usePostPlannedExpenseMutation();

  const [
    updateData,
    {
      isLoading: updatedPlannedExpenseIsLoading,
      isError: updatedPlannedExpenseError,
      error: plannedExpenseErrorData,
    }] = useGetUpdatedPlannedExpenseMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postData({ token: user?.token, body: {
      amount: Number(data.amount),
      plannedBudgetId: Number(id),
    } });
  };

  useEffect(() => {
    const updatePlannedExpenseData = async () => {
      const { data } = await updateData({
        token: user?.token,
        date: makeDateString({ year: date.year, month: date.month }),
      }) as { data: IPlannedExpense };

      if (data) {
        dispatch(
          setPlannedExpenseList(data),
        );

        return navigate('/plan');
      }
    };

    if (isSuccess) {
      updatePlannedExpenseData();
    }

    if (isError) {
      if (error) {
        dispatch(
          setApiError({
            data: (error as FetchBaseQueryError).data,
            status: (error as FetchBaseQueryError).status,
          }),
        );
      }
    }

  }, [isSuccess, isError, data, error, dispatch, navigate, updateData, user?.token, date.year, date.month]);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading: isLoading || updatedPlannedExpenseIsLoading,
  };
};
