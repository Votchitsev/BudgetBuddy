import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useSignUpMutation } from '@shared/api';
import { setApiError } from '@shared/store';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Inputs } from './types';

export const useSignUp = () => {
  const [postData, { isLoading, isSuccess, isError, data, error }] = useSignUpMutation();
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
            data: (error as FetchBaseQueryError ).data,
            status: (error as FetchBaseQueryError ).status,
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
