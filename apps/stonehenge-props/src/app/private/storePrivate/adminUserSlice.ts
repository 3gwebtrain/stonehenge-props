import { createSlice } from '@reduxjs/toolkit';
import { AdminUserInfoProps } from '@stonehenge/prop-types';

const initialUser: AdminUserInfoProps | undefined = {
  adminUser: null,
};

export const AdminUserSlice = createSlice({
  name: 'AdminUser',
  initialState: initialUser,
  reducers: {
    setUser: (state, { payload }) => {
      console.log('happy to save', payload);
      state.adminUser = payload;
    },
  },
});

export const { setUser } = AdminUserSlice.actions;
