import styled from 'styled-components';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
}

export const BottomSheet = ({ isOpen, children, setIsOpen, ...props }: IProps) => {
  return (
    <Overlay $isOpen={isOpen} {...props} onClick={() => setIsOpen(false)}>
      <SheetView $isOpen={isOpen}>
        { children }
      </SheetView>
    </Overlay>
  );
};

const SheetView = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--main);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform .3s ease-in-out;
  z-index: 1000;
  height: 70vh;
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  z-index: ${ ({ $isOpen }) => ($isOpen ? 999 : -1)};
`;
