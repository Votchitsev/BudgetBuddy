import { Protected } from '@features/verify-user';
import {
  ChangeIncomePage,
  ChangePlanExpensePage,
  IncomePage,
  MainPage,
  NewPlannedBudgetFormPage,
  PageLayout,
  PlanListPage,
  SignInPage,
  SignUpPage,
} from '@pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    element: <Protected />,
    children: [
      {
        path: '/',
        element: <PageLayout />,
        children: [
          {
            path: '/',
            element: <MainPage />,
          },
          {
            path: '/plan',
            element: <PlanListPage />,
          },
          {
            path: '/plan-budget/new',
            element: <NewPlannedBudgetFormPage />,
          },
          {
            path: '/plan-expense/change/:id/:name',
            element: <ChangePlanExpensePage />,
          },
          {
            path: '/income',
            element: <IncomePage />,
          },
          {
            path: '/income/:id',
            element: <ChangeIncomePage />,
          },
        ],
      },
    ],
  },
]);
