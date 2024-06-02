import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ccc;
  background-color: var(--secondary-color);
  border-radius: 15px;
  padding: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  outline: none;
  color: var(--dark-color);

  &::placeholder {
    color: var(--dark-color);
  }
`;
