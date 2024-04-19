import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from '../api';
import apiErrorSlice from './apiErrorSlice';
import dateReducer from './dateSlice';
import incomeReducer from './incomeSlice';
import plannedExpenseReducer from './plannedExpenseSlice';
import planReducer from './planSlice';
import userReducer from './userSlice';

const userPersistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  apiError: apiErrorSlice,
  date: dateReducer,
  plan: planReducer,
  plannedExpense: plannedExpenseReducer,
  income: incomeReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
