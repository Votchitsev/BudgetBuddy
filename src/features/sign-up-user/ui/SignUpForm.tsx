import { InputText } from '@shared/ui';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Inputs } from '../model/types';
import { useSignUp } from '../model/useSignUp';

export const SignUpForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { onSubmit, isLoading } = useSignUp();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        placeholder="Имя"
        { ...register('name', { required: true } ) }
      />
      <InputText
        placeholder="Пароль"
        type="password"
        { ...register('password', { required: true } ) }
      />
      <InputText
        placeholder="Повторите пароль"
        type="password"
        { ...register('confirmPassword', { required: true } ) }
      />
      <Button type='submit' loading={isLoading} style={{ alignSelf: 'center' }}>
        Зарегистрироваться
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
