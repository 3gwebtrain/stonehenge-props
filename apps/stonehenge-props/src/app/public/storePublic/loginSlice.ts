import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserLoggedInProps, UserLoginProps } from '@stonehenge/prop-types';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { environment } from '../../../environments/environment';

const initialUser: UserLoggedInProps = {
  email: '',
  password: '',
  status: '',
  userDetails: {
    token: '',
  },
};

export const loginAdminUser = createAsyncThunk('post/login', async (user: UserLoginProps) => {
  try {
    const response = await axios.post(environment.BASE_URL + '/user/admin-login', user);
    if (response.data.success) {
      toast.success(response.data.message);
      toast('Redirecting to Home page');
      localStorage.setItem('token', response.data.data.token);
      return response.data.data;
    } else {
      toast.error(response.data.message);
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const AdminLoginSlice = createSlice({
  name: 'UserLogin',
  initialState: initialUser,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAdminUser.pending, (state) => {
        return (state = { ...state, status: 'pending' });
      })
      .addCase(loginAdminUser.fulfilled, (state, { payload }) => {
        return (state = { ...state, userDetails: { ...payload }, status: 'success' });
      })
      .addCase(loginAdminUser.rejected, (state) => {
        return (state = { ...state, status: 'failed' });
      });
  },
});
