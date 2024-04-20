import { useContext } from 'react';

import { ModalContext, ModalDispatchContext } from './context';

export const useModalContext = () => {
  const modal = useContext(ModalContext);
  const dispatch = useContext(ModalDispatchContext);

  return {
    modal,
    dispatch,
  };
};
