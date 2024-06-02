import styled from 'styled-components';

import { useMonth } from '../model/useMonth';
import { Chevron } from './Chevron';

export const MonthSwitcher = () => {
  const { handleSetMonth, current, hasNextMonth } = useMonth();

  return (
    <MonthSwitcherView>
      <Chevron width={25} height={25} onClick={() => handleSetMonth('prev')} />
      <Current>
        <p>{ current.month.name }</p>
        <p>{ current.year }</p>
      </Current>
      { hasNextMonth
        &&
          <Chevron
            width={25}
            height={25}
            style={{ rotate: '180deg' }}
            onClick={() => handleSetMonth('next')}
          /> }
    </MonthSwitcherView>
  );
};

const MonthSwitcherView = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
`;

const Current = styled.div`
  display: flex;
  gap: .5rem;
`;