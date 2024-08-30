import { Dispatch } from '@reduxjs/toolkit';
import { setSavings } from '@shared/store';

export class Savings {
  dispatchInstance: Dispatch;
  actionInstance: typeof setSavings;

  constructor(dispatchInstance: Dispatch, actionInstance: typeof setSavings) {
    this.dispatchInstance = dispatchInstance;
    this.actionInstance  = actionInstance;
  }

  updateSavings(newPercent: number, newAmount: number) {
    this.dispatchInstance(
      this.actionInstance({
        percent: newPercent,
        amount: newAmount,
      }),
    );
  }
}