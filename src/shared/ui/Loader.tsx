import styled, { keyframes } from 'styled-components';

import { Rocket } from './Rocket';

interface IProps {
  forButton?: boolean;
}

export const Loader = ({ forButton = false }: IProps = {}) => {
  if (forButton) {
    return (
      <LoaderBody>
        <LoaderItem />
      </LoaderBody>
    );
  }

  return (
    <LoaderView>
      <LoaderBody>
        <LoaderItem />
      </LoaderBody>
    </LoaderView>
  );
};

const LoaderView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const loading = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(0);
  }
`;

const LoaderItem = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--secondary-color);
  margin: 0.5rem;
  animation: ${loading} 1s infinite ease-in-out;
`;
