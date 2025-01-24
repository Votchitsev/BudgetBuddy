import { Button } from 'primereact/button';
import { type FC } from 'react';
import styled from 'styled-components';

interface BackProps {
  label: string;
  handleClick: () => void;
}

const Back: FC<BackProps> = ({ label, handleClick }) => {
  return (
    <StyledButton onClick={handleClick} link>
      <i className="pi pi-angle-left" />
      <Label>{label}</Label>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: fit-content;
`;

const Label = styled.span``;

export default Back;
