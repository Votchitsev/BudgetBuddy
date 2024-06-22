import { BackButton } from '@entities/back-button';
import { Burger, Menu } from '@entities/header-menu';
import { MonthSwitcher } from '@features/change-month';
import { LogoutButton } from '@features/logout';
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Header: FC = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderView>
      { location.pathname !== '/' ? (
        <BackButton />
      ) : (
        <MonthSwitcher />
      ) }
      <Burger onClick={() => setShowMenu(!showMenu)} />
      <Menu show={showMenu}>
        <LogoutButton />
      </Menu>
    </HeaderView>
  );
};

const HeaderView = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;
