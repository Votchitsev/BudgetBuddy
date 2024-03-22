import 'react-datepicker/dist/react-datepicker.css';

import { ru } from 'date-fns/locale/ru';
import DatePicker, { registerLocale } from 'react-datepicker';

import { useMonth } from '../model/useMonth';

registerLocale('ru', ru);

export const MonthInput = () => {
  const { handleSetMonth, current } = useMonth();

  return (
    <DatePicker
      dateFormat={'MMM yyyy'}
      showMonthYearPicker
      selected={new Date(current.year, current.month)}
      onChange={(date) => handleSetMonth(date?.getMonth() || 0, date?.getFullYear() || 0)}
      locale={'ru'}
      className='month-input'
    />
  );
};
