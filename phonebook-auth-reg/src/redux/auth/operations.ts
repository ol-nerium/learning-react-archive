import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
//
const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const res = await axios.post('/users/signup', data);
    token.set(res.data.token);
    return res.data;
  } catch (error: unknown) {
    if (typeof error === 'string') {
      return thunkAPI.rejectWithValue(error.toUpperCase()); // works, `e` narrowed to string
    } else if (error instanceof Error) {
      // works, `e` narrowed to Error
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', data);
    token.set(res.data.token);
    return res.data;
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
    // return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('');
    }
    token.set(persistedToken);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { register, login, logout, refreshUser };
