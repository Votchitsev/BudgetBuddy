import { SavingsDetails, SavingsForm } from '@entities/savings';
import { BottomSheet, Button } from '@shared/ui';
import { useState } from 'react';

export const SavingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SavingsDetails />
      <Button onClick={() => setIsOpen(true)}>
        Изменить
      </Button>
      <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen}>
        <SavingsForm closeSheet={() => setIsOpen(false)} />
      </BottomSheet>
    </>
  );
};
