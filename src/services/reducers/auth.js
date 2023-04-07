import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import * as api from '../../utils/api';

const getInitialState = () => ({
  user: null,
  accessToken: null,
  refreshToken: null,
});

export const slice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  extraReducers: (builder) => {
    const onRegister = (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.user = payload.user;
    };

    builder.addCase(authRegister.fulfilled, onRegister);
    builder.addCase(authLogin.fulfilled, onRegister);
    builder.addCase(authRefresh.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
    });
    builder.addCase(authLogout.fulfilled, (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    });
  }
});

export const authSelectors = {
  user: (state) => state.auth.user,
  accessToken: (state) => state.auth.accessToken,
  refreshToken: (state) => state.auth.refreshToken,
};

export const authRegister = createAsyncThunk(
  'auth/register',
  async (data) => {
    return await api.authRegister(data);
  },
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (data) => {
    return await api.authLogin(data);
  },
);

export const authRefresh = createAsyncThunk(
  'auth/refresh',
  async (data) => {
    return await api.authLogout(data);
  },
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (_, { getState }) => {
    const state = getState();

    return await api.authLogout({ token: state.auth.refreshToken });
  },
);

export const authActions = slice.actions;
export default slice.reducer;