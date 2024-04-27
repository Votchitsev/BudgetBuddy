import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { usePostDailyExpenseMutation } from '@shared/api';
import { RootState, setApiError } from '@shared/store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import type { Inputs } from './types';

export const useDailyExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { date } = useParams();
  const { user } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Inputs>();
  const [postData, { isLoading, isSuccess, isError, data, error }] = usePostDailyExpenseMutation();

  const onSubmit = async (data: Inputs) => {
    postData({
      body: {
        amount: Number(data.amount),
        date,
      },
      token: user?.token,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      return navigate('/daily-expense');
    }

    if (isError) {
      if (error) {
        dispatch(
          setApiError({
            error: error as FetchBaseQueryError,
          }),
        );
      }
    }
  }, [isSuccess, navigate, dispatch, isError, data, error]);



  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
