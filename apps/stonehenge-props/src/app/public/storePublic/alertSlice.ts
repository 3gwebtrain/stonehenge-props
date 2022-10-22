import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    alert: false,
  },
  reducers: {
    showAlert: (state) => {
      return (state = { ...state, alert: true });
    },
    hideAlert: (state) => {
      return (state = { ...state, alert: false });
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
