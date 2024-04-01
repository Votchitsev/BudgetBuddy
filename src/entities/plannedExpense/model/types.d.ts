export interface IPlannedExpenseItem {
  id: number;
  name: string;
  plannedAmount: number;
  expenseAmount: number;
  balance: number;
}

export interface IPlannedExpense {
  date: string;
  expenseList: IPlannedExpenseItem[] | [];
}
