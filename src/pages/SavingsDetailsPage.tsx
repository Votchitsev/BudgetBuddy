import { SavingsDetails, SavingsForm } from '@entities/savings';
import { BottomSheet, Button } from '@shared/ui';
import { useState } from 'react';

export const SavingsDetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SavingsDetails />
      <Button title="Изменить" onClick={() => setIsOpen(true)} />
      <BottomSheet isOpen={isOpen} setIsOpen={setIsOpen}>
        <SavingsForm />
      </BottomSheet>
    </>
  );
};
