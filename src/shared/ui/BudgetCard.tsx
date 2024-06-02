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
  position: relative;
  width: 95%;
  padding: 1.5rem;
  border: 1px solid var(--secondary-color);
  border-radius: 15px;
  align-self: center;
`;

const Title = styled.span`
  position: absolute;
  background-color: var(--dark-color);
  color: var(--secondary-color);
  top: -1rem;
  left: 1rem;
  padding: 0.5rem;
  font-size: .8rem;
`;
