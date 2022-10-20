import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterFormProps, UserRegisterProps } from '@stonehenge/prop-types';
import axios, { AxiosError } from 'axios';
import { environment } from '../../../environments/environment';

const initialUser: UserRegisterProps = {
  name: '',
  email: '',
  password: '',
  status: '',
};

export const registerUser = createAsyncThunk('post/user', async (user: RegisterFormProps) => {
  try {
    const response = await axios.post(environment.BASE_URL + '/user/register', user);
    console.log('rs', response.data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
});

export const RegisterSlice = createSlice({
  name: 'User',
  initialState: initialUser,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state = { ...state, status: 'pending' };
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state = { ...state, ...payload, status: 'success' };
      })
      .addCase(registerUser.rejected, (state) => {
        state = { ...state, status: 'error' };
      });
  },
});
