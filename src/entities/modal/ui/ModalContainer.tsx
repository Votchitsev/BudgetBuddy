import styled, { keyframes } from 'styled-components';

const topSlide = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ModalContent = styled.div`
  background-color: var(--secondary-color);
  color: var(--light-color);
  padding: 1.5rem;
  border-radius: 4px;
  animation: ${topSlide} 0.3s ease-in-out;
`;
