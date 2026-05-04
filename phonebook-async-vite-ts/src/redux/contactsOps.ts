import {
  createAsyncThunk,
  type AsyncThunk,
  type AsyncThunkConfig,
} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://68f4d3d7b16eb6f468359b36.mockapi.io/';

const fetchContacts: AsyncThunk<any, void, AsyncThunkConfig> = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunkAPI) {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const addContact: AsyncThunk<
  any,
  { name: string; number: string },
  AsyncThunkConfig
> = createAsyncThunk(
  'contacts/addContact',
  async function (newContact, thunkAPI) {
    try {
      const res = await axios.post('/contacts', newContact);
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const deleteContact: AsyncThunk<any, string, AsyncThunkConfig> =
  createAsyncThunk(
    'contacts/deleteContact',
    async function (ID: string, thunkAPI) {
      try {
        const res = await axios.delete(`/contacts/${ID}`);
        return res.data;
      } catch (error: unknown) {
        return thunkAPI.rejectWithValue((error as Error).message);
      }
    }
  );

export { fetchContacts, addContact, deleteContact };
