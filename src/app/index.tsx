import './style/colors.css';
import './style/global.css';
import './style/datepicker.css';
import 'normalize.css';

import { ErrorModal } from '@entities/errorModal';
import { ModalProvider } from '@entities/modal';
import { persistor, store } from '@shared/store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { router } from './router';

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <ErrorModal />
        </PersistGate>
      </ModalProvider>
    </Provider>
  );
}

export default App;
