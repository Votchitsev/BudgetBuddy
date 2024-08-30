import { Chevron } from '@shared/ui';
import styled from 'styled-components';

import { useMonth } from '../model/useMonth';

export const MonthSwitcher = () => {
  const { handleSetMonth, current, hasNextMonth } = useMonth();

  return (
    <MonthSwitcherView>
      <Chevron width={30} height={30} onClick={() => handleSetMonth('prev')} />
      <Current>
        <div>{ current.month.name }</div>
        <div>{ current.year }</div>
      </Current>
      { hasNextMonth
        &&
          <Chevron
            width={30}
            height={30}
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
  color: var(--third);
  font-weight: 700;
`;

const Current = styled.div`
  display: flex;
  gap: .5rem;
`;