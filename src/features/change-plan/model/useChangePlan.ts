import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { usePutPlannedBudgetMutation } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setApiError } from '@shared/store';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import type { Inputs } from './types';

export const useChangePlan = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  const [postData, { isLoading, isSuccess, isError, data, error }] = usePutPlannedBudgetMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postData({ token: user?.token, body: {
      id: Number(id),
      name: data.name,
      amount: Number(data.amount),
      date: makeDateString({ year: date.year, month: date.month }),
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
            data: (error as FetchBaseQueryError ).data,
            status: (error as FetchBaseQueryError ).status,
          }),
        );
      }
    }
  }, [isSuccess, isError, dispatch, data, error, navigate]);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
