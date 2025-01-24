import { Card } from 'primereact/card';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  children: React.ReactNode|React.ReactNode[];
  onClickHandler?: () => void;
}

export const BudgetCard = ({ title, children, onClickHandler }: IProps) => {
  return (
    <StyledCard
      title={title}
      onClick={onClickHandler}
      pt={{
        title: {
          style: cardTitleAdStyle,
        },
      }}
    >
      <CardContent>
        { children }
      </CardContent>
    </StyledCard>
  );
};

const CardContent = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const StyledCard = styled(Card)`
  font-size: 1rem;
  cursor: pointer;
`;

const cardTitleAdStyle = {
  fontSize: '1rem',
};
