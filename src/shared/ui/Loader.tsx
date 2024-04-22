import styled from 'styled-components';

import loader from '../assets/Loader.gif';
import loaderForButton from '../assets/LoaderForButton.gif';

interface IProps {
  forButton?: boolean;
}

export const Loader = ({ forButton = false }: IProps = {}) => {
  if (forButton) {
    return (
      <img src={loaderForButton} alt="loader" />
    );
  }

  return (
    <LoaderView>
      <img src={loader} alt="loader" />
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
