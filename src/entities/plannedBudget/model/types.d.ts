export interface IPlannedBudgetItem {
  id: number;
  name: string;
  amount: number;
  date: string;
}

export interface IPlannedBudget {
  date: string;
  total: number;
  plannedBudgetList: IPlannedBudgetItem[];
}
