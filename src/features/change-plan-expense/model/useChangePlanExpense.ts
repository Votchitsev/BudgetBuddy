import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { usePostPlannedExpenseMutation } from '@shared/api';
import { RootState, setApiError } from '@shared/store';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import type { Inputs } from './types';

export const useChangePlanExpenseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Inputs>();
  const [postData, { isLoading, isSuccess, isError, data, error }] = usePostPlannedExpenseMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postData({ token: user?.token, body: {
      amount: Number(data.amount),
      plannedBudgetId: Number(id),
    } });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/plan');
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

  }, [isSuccess, isError, data, error, dispatch, navigate, date.year, date.month]);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading: isLoading,
  };
};
