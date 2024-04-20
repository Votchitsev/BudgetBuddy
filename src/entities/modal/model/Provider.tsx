import { useReducer } from 'react';

import { Modal } from '../ui/Modal';
import { ModalContext, ModalDispatchContext } from './context';
import { modalReducer } from './reducer';

interface IProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: IProps) => {
  const [modal, dispatch] = useReducer(modalReducer, null);
  return (
    <ModalContext.Provider value={modal}>
      <ModalDispatchContext.Provider value={dispatch}>
        { children }
        <Modal>
          { modal }
        </Modal>
      </ModalDispatchContext.Provider>
    </ModalContext.Provider>
  );
};
