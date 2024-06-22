import { SimpleButton } from '@shared/ui';

import { useLogout } from '../model/useLogout';

export const LogoutButton = () => {
  const { handleLogout } = useLogout();
  return (
    <SimpleButton
      onClick={handleLogout}
    >
      Выйти из аккаунта
    </SimpleButton>
  );
};
