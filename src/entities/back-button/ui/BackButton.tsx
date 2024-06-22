import { Chevron } from '@shared/ui';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  to?: string;
}

export const BackButton: FC<IProps> = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  return (
    <View>
      <Link to={location.state?.from || '/'} relative="path">
        <Chevron
          width={30}
          height={30}
        />
      </Link>
    </View>
  );
};

const View = styled.div`
  display: flex;
  color: var(--light-color);
  max-height: 30px;
`;
