import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from './useAuth';

export const Protected = () => {
  const { isLoading, verify } = useAuth();

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  if (!verify) {
    return <Navigate to={'/sign-in'}/>;
  }

  return (
    <Outlet />
  );
};
