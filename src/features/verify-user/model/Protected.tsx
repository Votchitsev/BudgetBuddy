import { Loader } from '@shared/ui';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from './useAuth';

export const Protected = () => {
  const { isLoading, verify } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  if (!verify) {
    return <Navigate to={'/sign-in'}/>;
  }

  return (
    <Outlet />
  );
};
