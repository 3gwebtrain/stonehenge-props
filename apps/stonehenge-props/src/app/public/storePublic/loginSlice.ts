import { createSlice } from '@reduxjs/toolkit';
import { UserLoginProps } from '@stonehenge/prop-types';

const initialUser: UserLoginProps = {
  email: '',
  password: '',
  status: '',
};

export const AdminLoginSlice = createSlice({
  name: 'UserLogin',
  initialState: initialUser,
  reducers: {},
});
