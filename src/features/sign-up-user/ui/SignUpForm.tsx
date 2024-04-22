
import { Button, Input, Loader } from '@shared/ui';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Inputs } from '../model/types';
import { useSignUp } from '../model/useSignUp';

export const SignUpForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { onSubmit, isLoading } = useSignUp();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Имя"
        { ...register('name', { required: true } ) }
      />
      <Input
        placeholder="пароль"
        type="password"
        { ...register('password', { required: true } ) }
      />
      <Input
        placeholder="повторите пароль"
        type="password"
        { ...register('confirmPassword', { required: true } ) }
      />
      <Button type='submit'>
        { isLoading ? (
          <Loader forButton />
        ) : (
          <span>Зарегистрироваться</span>
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
