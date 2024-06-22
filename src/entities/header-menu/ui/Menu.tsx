import styled from 'styled-components';

interface IProps {
  children: React.ReactNode|React.ReactNode[];
  show?: boolean;
}

export const Menu = ({ children, show = true }: IProps) => {
  return (
    <MenuView $show={show}>
      <MenuInnerView>
        { children }
      </MenuInnerView>
    </MenuView>
  );
};

const MenuView = styled.div<{ $show: boolean }>`
  position: fixed;
  width: 100%;
  padding: ${ props => props.$show ? '1rem' : 0 };
  height: ${props => props.$show ? 'fit-content' : 0 };
  min-height: ${props => props.$show ? 'fit-content' : 0 };
  opacity: ${props => props.$show ? 1 : 0 };
  background-color: var(--dark-color);
  z-index: 20;
  top: calc(3rem + 18px);
  box-shadow: 0 4px 10px -1px #181616;
  left: 0;
  border-radius: 0 0 20px 20px;
  overflow-y: hidden;
  transition: all 0.3s ease-in-out;
`;

const MenuInnerView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
