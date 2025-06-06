import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import counterReducer from '@lms/features/counter/counterSlice';
import { storage } from '@lms/shared/lib/ssrSafeStorage';

const rootReducer = combineReducers({ counter: counterReducer });

const persistConfig = { key: 'root', storage, whitelist: ['counter'] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
