import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterFormProps, UserRegisterProps } from '@stonehenge/prop-types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { environment } from '../../../environments/environment';

const initialUser: UserRegisterProps = {
  name: '',
  email: '',
  password: '',
  status: '',
};

export const registerUser = createAsyncThunk('post/user', async (user: RegisterFormProps) => {
  try {
    const response = (await axios.post(environment.BASE_URL + '/user/register', user)) as AxiosResponse;
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const RegisterSlice = createSlice({
  name: 'User',
  initialState: initialUser,
  reducers: {},
});
