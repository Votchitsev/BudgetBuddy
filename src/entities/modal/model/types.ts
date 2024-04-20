import { ReactNode } from 'react';

export type ModalAction =
| { type: 'SET_MODAL', payload: ReactNode }
| { type: 'CLEAR_MODAL' }
