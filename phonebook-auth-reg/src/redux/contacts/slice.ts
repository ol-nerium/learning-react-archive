import { createSlice } from '@reduxjs/toolkit';

import {
  getAllContacts,
  updateContact,
  deleteContact,
  createContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        // console.log('rejected', action.error);
        return { ...state, isLoading: true };
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        return { ...state, items: [...action.payload], isLoading: false };
      })

      //
      //
      .addCase(createContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
        };
      })
      .addCase(createContact.pending, (state, _) => {
        return { ...state, isLoading: true };
      })
      .addCase(createContact.rejected, (state, action) => {
        return { ...state, isLoading: false };
      })
      //
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: state.items.filter(i => i.id !== action.payload.id),
        };
        //
      })

      .addCase(updateContact.fulfilled, (state, action) => {
        const updatedContactIndex = state.items
          .map(item => item.id)
          .indexOf(action.payload.id);

        const updatedItems = [
          ...state.items.slice(0, updatedContactIndex),
          action.payload,
          ...state.items.slice(updatedContactIndex + 1),
        ];
        // console.log(items);
        return { ...state, items: updatedItems };
      });
  },
});

export default contactsSlice.reducer;
