import styled, { keyframes } from 'styled-components';

interface IProps {
  forButton?: boolean;
}

export const Loader = ({ forButton = false }: IProps = {}) => {
  if (forButton) {
    return (
      <LoaderBody>
        <LoaderItem $forButton />
      </LoaderBody>
    );
  }

  return (
    <LoaderView>
      <LoaderBody>
        <LoaderItem $forButton={forButton} />
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


const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderItem = styled.div<{ $forButton: boolean }>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-left-color: ${ ({ $forButton })  => $forButton ? 'var(--main)' : 'var(--third)'};

  animation: ${spin} 1s ease infinite;
`;
