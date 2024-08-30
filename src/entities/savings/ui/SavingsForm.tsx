import { useSavingsForm } from '@features/change-savings';
import { RootState } from '@shared/store';
import { Button, Input, Loader } from '@shared/ui';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface IProps {
  closeSheet: () => void;
}

export const SavingsForm = ({ closeSheet }: IProps) => {
  const { register, isLoading, handleSubmit } = useSavingsForm();
  const savings = useSelector((state: RootState) => state.savings);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await handleSubmit();
    closeSheet();
  };

  return (
    <FormView>
      <Input
        onClick={(e) => e.stopPropagation()}
        type="number"
        { ...register('percent', { required: true, min: 0, max: 100 }) }
        defaultValue={savings.percent}
      />
      <Button onClick={handleClick} >
        { isLoading ? <Loader forButton /> : 'Сохранить' }
      </Button>
    </FormView>
  );
};

const FormView = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;
