import { configureStore } from '@reduxjs/toolkit';
import { RegisterSlice } from '../public/storePublic/registerSlice';

const Store = configureStore({
  reducer: {
    registerSlice: RegisterSlice.reducer,
  },
});

export type AppState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
