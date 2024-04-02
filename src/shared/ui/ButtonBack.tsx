import styled from 'styled-components';

export const ButtonBack = () => {
  return (
    <Button onClick={() => window.history.back()}> ← Назад</Button>
  );
};

const Button = styled.button`
  border: none;
  background: none;
  width: fit-content;
`;
