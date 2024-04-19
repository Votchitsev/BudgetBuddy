export interface IIncomeItem {
  id: number;
  name: string;
  amount: number;
  date: string;
}

export interface IIncome {
  date: string;
  total: number;
  incomeList: IIncomeItem[]
}
