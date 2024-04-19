import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { usePostIncomeMutation, usePutIncomeMutation } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setApiError } from '@shared/store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Inputs } from './types';

export const useIncomeForm = (id: string|undefined) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { date } = useSelector((state: RootState) => state.date);
  const { register, handleSubmit } = useForm<Inputs>();

  const [
    postData, {
      isLoading: isLoadingPost,
      isSuccess: isSuccessPost,
      isError: isErrorPost,
      error: errorPost,
    }] = usePostIncomeMutation();

  const [
    putData, {
      isLoading: isLoadingPut,
      isSuccess: isSuccessPut,
      isError: isErrorPut,
      error: errorPut,
    }] = usePutIncomeMutation();

  const onChangeIncomeSubmit = (data: Inputs) => {
    putData({
      body: {
        ...data,
        date: makeDateString({ year: date.year, month: date.month }),
        amount: Number(data.amount),
        id,
      },
      token: user?.token,
    });
  };

  const onNewIncomeSubmit = (data: Inputs) => {
    postData({
      body: {
        ...data,
        date: makeDateString({ year: date.year, month: date.month }),
        amount: Number(data.amount),
      },
      token: user?.token,
    });
  };

  useEffect(() => {
    if (isSuccessPost) {
      return navigate('/income');
    }

    if (isErrorPost) {
      if (errorPost) {
        dispatch(
          setApiError({
            data: (errorPost as FetchBaseQueryError).data,
            status: (errorPost as FetchBaseQueryError).status,
          }),
        );
      }
    }
  }, [dispatch, isSuccessPost, navigate, isErrorPost, errorPost]);

  useEffect(() => {
    if (isSuccessPut) {
      return navigate('/income');
    }

    if (isErrorPut) {
      if (errorPut) {
        dispatch(
          setApiError({
            data: (errorPut as FetchBaseQueryError).data,
            status: (errorPut as FetchBaseQueryError).status,
          }),
        );
      }
    }
  }, [dispatch, isSuccessPut, navigate, isErrorPut, errorPut]);

  return {
    register,
    onChangeIncomeSubmit: handleSubmit(onChangeIncomeSubmit),
    onNewIncomeSubmit: handleSubmit(onNewIncomeSubmit),
    isLoading: isLoadingPut || isLoadingPost,
  };
};
