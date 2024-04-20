import { createContext, Dispatch, ReactNode } from 'react';

import { ModalAction } from './types';

export const ModalContext = createContext<ReactNode>(null);
export const ModalDispatchContext = createContext<Dispatch<ModalAction>>(() => {});
