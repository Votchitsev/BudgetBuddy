export const makeDateString = ({ year, month }: { year: number; month: number }) => {
  return `${year}-${(month + 1).toString().padStart(2, '0')}`;
};
