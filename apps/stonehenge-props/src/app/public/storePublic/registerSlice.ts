import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterFormProps, UserRegisterProps } from '@stonehenge/prop-types';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { environment } from '../../../environments/environment';
import { AppDispatch } from '../../storeApp/appStore';
import { hideAlert, showAlert } from './alertSlice';

const initialUser: UserRegisterProps = {
  name: '',
  email: '',
  password: '',
  status: '',
};

export const registerUser = createAsyncThunk('post/user', async (user: RegisterFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  try {
    dispatch(showAlert());
    const response = await axios.post(environment.BASE_URL + '/user/register', user);
    dispatch(hideAlert());
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error: unknown) {
    dispatch(hideAlert());
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const RegisterSlice = createSlice({
  name: 'User',
  initialState: initialUser,
  reducers: {},
});
