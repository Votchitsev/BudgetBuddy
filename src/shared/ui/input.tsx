import styled from 'styled-components';

export const Input = styled.input`
  background-color: var(--secondary);
  border-radius: 15px;
  padding: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  outline: none;
  color: #ffffff;
  box-shadow: 0 4px 10px -1px #181616;

  &::placeholder {
    color: var(--light-color);
  }
`;
