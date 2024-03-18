import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useSignInMutation } from '@shared/api';
import { setApiError } from '@shared/store';
import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { Inputs } from './types';

export const useSignInForm = () => {
  const [postData, { isLoading, isSuccess, isError, data, error }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postData(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
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
  }, [isSuccess, isError, dispatch, data, error, navigate]);

  return {
    onSubmit,
    isLoading,
  };
};
