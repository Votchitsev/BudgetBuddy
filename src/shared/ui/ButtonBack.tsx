import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  href?: string;
}

export const ButtonBack = ({ href }: IProps = {}) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (href) {
      return navigate(href);
    }

    return navigate(-1);
  };

  return (
    <Button
      onClick={onClickHandler}
    >
      ← Назад
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background: none;
  width: fit-content;
  color: var(--primary-color);
`;
