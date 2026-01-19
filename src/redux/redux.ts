import { createSlice, configureStore } from '@reduxjs/toolkit';

const phonebookSlicer = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
  },
  reducers: {
    returnItem: state => {
      return state;
    },
  },
});

export const { phonebookSlicer } = phonebookSlicer.actions;

const store = configureStore({
  reducer: phonebookSlicer.reducer,
});
