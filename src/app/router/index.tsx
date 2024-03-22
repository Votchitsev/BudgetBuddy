import { Protected } from '@features/verify-user';
import { MainPage, SignInPage, SignUpPage } from '@pages';
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
        element: <MainPage />,
      },
    ],
  },
]);
