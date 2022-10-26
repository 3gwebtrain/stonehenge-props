import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AdminUserInfoProps, landLordProps } from '@stonehenge/prop-types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { environment } from '../../../environments/environment';

const initialUser: AdminUserInfoProps | undefined = {
  adminUser: null,
  landLords: null,
  status: 'pending',
};

export const addLandLord = createAsyncThunk('add/landLord', async (landLord: landLordProps) => {
  try {
    const response = (await axios.post<landLordProps>(environment.BASE_URL + '/landloard/add-landloard', landLord)) as AxiosResponse;
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

export const listLandLords = createAsyncThunk('list/landLord', async () => {
  try {
    const response = (await axios.get<landLordProps>(environment.BASE_URL + '/landloard/landloards')) as AxiosResponse;
    if (response.data.success) {
      toast.success(response.data.message);
      return response.data.landLords;
    } else {
      toast.error(response.data.message);
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const inviteLandLord = createAsyncThunk('list/invite', async (invite: landLordProps) => {
  try {
    const response = (await axios.post<landLordProps>(environment.BASE_URL + '/landloard/invite', invite)) as AxiosResponse;
    if (response.data.success) {
      toast.success(response.data.message);
      return response.data.landLords;
    } else {
      toast.error(response.data.message);
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
});

export const AdminUserSlice = createSlice({
  name: 'AdminUser',
  initialState: initialUser,
  reducers: {
    setUser: (state, { payload }) => {
      state.adminUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listLandLords.pending, (state) => {
        return (state = { ...state, status: 'pending' });
      })
      .addCase(listLandLords.fulfilled, (state, { payload }) => {
        return (state = { ...state, landLords: payload, status: 'success' });
      })
      .addCase(listLandLords.rejected, (state) => {
        return (state = { ...state, status: 'failed' });
      });
  },
});

export const { setUser } = AdminUserSlice.actions;
