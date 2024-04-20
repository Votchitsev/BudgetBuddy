import { ReactNode } from 'react';

import { ModalAction } from './types';

export const modalReducer = (state: ReactNode, action: ModalAction) => {
  switch (action.type) {
  case 'SET_MODAL':
    return action.payload;
  case 'CLEAR_MODAL':
    return state = null;
  default:
    return state;
  }
};
