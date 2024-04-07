import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { usePostPlannedBudgetMutation } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setApiError } from '@shared/store';
import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Inputs } from './types';

export const useNewPlannedBudgetForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<Inputs>();
  const { user } = useSelector((state: RootState) => state.user);
  const { date } = useSelector((state: RootState) => state.date);
  const [postData, { isLoading, isSuccess, isError, error }] = usePostPlannedBudgetMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postData({
      body: {
        name: data.name,
        amount: Number(data.amount),
        date: makeDateString({ year: date.year, month: date.month }),
      },
      token: user?.token,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      return navigate('/plan');
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
  }, [isSuccess, navigate, dispatch, isError, error, date.year, date.month]);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading: isLoading,
  };
};
