import './style/colors.css';
import './style/global.css';
import 'normalize.css';

import { ErrorModal } from '@entities/errorModal';
import { store } from '@shared/store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ErrorModal />
    </Provider>
  );
}

export default App;
