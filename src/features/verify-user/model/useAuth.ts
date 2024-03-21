import { useVerifyUserQuery } from '@shared/api';
import { RootState } from '@shared/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const user = useSelector((state: RootState) => state.user);
  const { isLoading, isSuccess, isError, data } = useVerifyUserQuery(user.user?.token);
  const [verify, setVerify] = useState(true);

  useEffect(() => {
    if (isSuccess) {
      if (data?.id && data?.username) {
        setVerify(true);
      }
    }

    if (isError) {
      setVerify(false);
    }
  }, [isError, isSuccess, data]);

  return {
    isLoading,
    verify,
  };
};
