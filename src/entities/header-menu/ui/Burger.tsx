import React from 'react';
import styled from 'styled-components';

export const Burger = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BurgerButton {...props}>
    <Line />
    <Line />
    <Line />
  </BurgerButton>
);

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;

const Line = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: var(--light-color);
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  border-radius: 10px;
`;
