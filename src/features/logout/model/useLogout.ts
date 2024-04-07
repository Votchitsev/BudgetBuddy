import { setUser } from '@shared/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      setUser({
        user: null,
        token: '',
      }),
    );

    navigate('/sign-in');
  };

  return {
    handleLogout,
  };
};
