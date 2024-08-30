import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  children: React.ReactNode|React.ReactNode[];
  onClickHandler?: () => void;
}

export const BudgetCard = ({ title, children, onClickHandler }: IProps) => {
  return (
    <Container
      onClick={onClickHandler}
    >
      <Title>{ title }</Title>
      { children }
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  padding: 1.5rem;
  padding-top: .7rem;
  border-radius: 15px;
  align-self: center;
  background-color: var(--secondary);
  box-shadow: 0 4px 10px -1px #181616;
  display: flex;
  flex-direction: column;
  gap: .7rem;
`;

const Title = styled.span`
  background-color: var(--secondary);
  color: var(--secondary-color);
  font-size: .8rem;
  color: var(--third);
  font-weight: 700;
`;
