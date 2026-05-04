import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

const createContact = createAsyncThunk('contacts/createContact', async data => {
  const res = await axios.post('/contacts', data);
  return res.data;
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  const res = await axios.delete(`/contacts/${id}`);
  return res.data;
});

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (args, _) => {
    const { id, ...data } = args;
    const res = await axios.patch(`/contacts/${id}`, data);
    return res.data;
  }
);

export { getAllContacts, updateContact, deleteContact, createContact };
