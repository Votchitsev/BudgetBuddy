import { usePutSavingsMutation } from '@shared/api';
import { makeDateString } from '@shared/lib';
import { RootState, setSavings } from '@shared/store';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type InputData = {
  percent: number;
}

export const useSavingsForm = () => {
  const { date } = useSelector((state: RootState) => state.date);
  const { user } = useSelector((state: RootState) => state.user);
  const { income } = useSelector((state: RootState) => state.income);
  const { register, handleSubmit, reset } = useForm<InputData>();
  const [putSavings, { isLoading, isSuccess }] = usePutSavingsMutation();
  const dispatch = useDispatch();

  const handleSubmitForm = handleSubmit(async (formData) => {
    try {
      if (!user?.token) {
        throw new Error('Токен пользователя не передан в запрос');
      }

      const response = await putSavings({ token: user.token, body: {
        percent: Number(formData.percent),
        date: makeDateString({ year: date.year, month: date.month }),
      } });

      if ('data' in response) {
        if (response.data) {
          dispatch(
            setSavings({ amount: income.total * (formData.percent / 100), percent: formData.percent  }),
          );
        }
      }
      reset();
    } catch (error) {
      alert(`Произошла ошибка: ${error}`);
    }
  });

  return {
    register,
    isLoading,
    isSuccess,
    handleSubmit: handleSubmitForm,
  };
};
