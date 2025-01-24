import './style/colors.css';
import './style/global.css';
import 'normalize.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';

import { ErrorModal } from '@entities/errorModal';
import { persistor, store } from '@shared/store/store';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { router } from './router';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrimeReactProvider>
          <RouterProvider router={router} />
          <ErrorModal />
        </PrimeReactProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
