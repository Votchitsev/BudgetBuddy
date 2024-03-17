import { SignUpPage } from '@pages';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='sign-up' element={ <SignUpPage /> } />,
  ),
);
