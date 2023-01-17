import { configureStore } from '@reduxjs/toolkit';
import users from '../slices/users/users';
export const store = configureStore({
  reducer: { users },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
