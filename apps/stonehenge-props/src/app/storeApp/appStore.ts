import { configureStore } from '@reduxjs/toolkit';
import { AdminUserSlice } from '../private/storePrivate';
import { AdminLoginSlice, alertSlice, RegisterSlice } from '../public/storePublic';

const Store = configureStore({
  reducer: {
    registerSlice: RegisterSlice.reducer,
    adminLoginSlice: AdminLoginSlice.reducer,
    alertSlice: alertSlice.reducer,
    adminUserSlice: AdminUserSlice.reducer,
  },
});

export type AppState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
