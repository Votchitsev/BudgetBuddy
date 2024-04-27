export interface IDailyExpenseItem {
  date: string;
  amount: number;
  budget: number;
  balance: number;
}

export interface IDailyExpenses {
  allowedExpense: number,
  outcomeBalance: number,
  expenseData: IDailyExpenseItem[],
}
