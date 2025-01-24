import { InputText } from '@shared/ui';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Inputs } from '../model/types';
import { useSignInForm } from '../model/useSignInForm';

export const SignInForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { onSubmit, isLoading } = useSignInForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        placeholder='Имя пользователя'
        { ...register('username', { required: true })}
      />
      <InputText
        placeholder='Пароль'
        type="password"
        { ...register('password', { required: true })}
      />
      <Button
        type='submit'
        style={{ alignSelf: 'center' }}
        disabled={isLoading}
        loading={isLoading}
      >
        Войти
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
