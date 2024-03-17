import styled from 'styled-components';

import { useErrorModal } from '../model/useErrorModal';

export const ErrorModal = () => {
  const { apiError, handleClose } = useErrorModal();

  return (
    <Modal
      $show={!!apiError}
      onClick={handleClose}
    >
      <span>
        { apiError?.status }
      </span>
      <span>
        { apiError?.data }
      </span>
    </Modal>
  );
};

const Modal = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 2%;
  left: 2%;
  right: 2%;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: var(--light-color);
  border-radius: 4px;
  display: ${props => props.$show ? 'flex' : 'none'};
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
