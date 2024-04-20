import styled from 'styled-components';

interface IProps {
  newExpenseHref: string;
}

export const Modal = ({ newExpenseHref }: IProps) => {
  return (
    <Links>
      <a href={newExpenseHref}>Добавить трату</a>
      <a href='/'>Изменить плановую сумму</a>
    </Links>
  );
};

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
