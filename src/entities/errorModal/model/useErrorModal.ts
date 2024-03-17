import { clearApiError,type RootState } from '@shared/store';
import { useDispatch, useSelector } from 'react-redux';

export const useErrorModal = () => {
  const dispatch = useDispatch();
  const { apiError } = useSelector((state: RootState) => state.apiError);
  const handleClose = () => {
    dispatch(
      clearApiError(),
    );
  };
  return {
    apiError,
    handleClose,
  };
};
