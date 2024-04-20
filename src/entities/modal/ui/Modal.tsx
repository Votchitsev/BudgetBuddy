import { useModalContext } from '../model/useModalContext';
import { ModalContent } from './ModalContainer';
import { ModalView } from './ModalView';

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const { modal, dispatch } = useModalContext();
  const onCloseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    dispatch({
      type: 'CLEAR_MODAL',
    });
  };

  return (
    <ModalView $show={!!modal} onClick={onCloseHandler}>
      <ModalContent>
        { children }
      </ModalContent>
    </ModalView>
  );
};
