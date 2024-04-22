import { Button, Input, Loader } from '@shared/ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Inputs } from '../model/types';
import { useSignInForm } from '../model/useSignInForm';

export const SignInForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { onSubmit, isLoading } = useSignInForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder='Имя пользователя'
        { ...register('username', { required: true })}
      />
      <Input
        placeholder='Пароль'
        { ...register('password', { required: true })}
      />
      <Button type='submit'>
        { isLoading ? (
          <Loader forButton />
        ) : (
          <span>Войти</span>
        )}
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
