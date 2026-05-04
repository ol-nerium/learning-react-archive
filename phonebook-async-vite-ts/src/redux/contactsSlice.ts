import type { contactsType, contactType, stateType } from '@/utils/types';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '@/redux/contactsOps';
import { selectNameFilter } from './filterSlice';

const initialState: contactsType = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, _) => {
        return { ...state, loading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return { ...state, loading: false, items: [...action.payload] };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })

      .addCase(addContact.pending, (state, _) => {
        return { ...state, loading: true };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          error: null,
          items: [...state.items, action.payload],
        };
      })
      .addCase(addContact.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })

      .addCase(deleteContact.pending, (state, _) => {
        return { ...state, loading: true };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          items: state.items.filter(i => i.id !== action.payload.id),
        };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      });
  },
});

const selectContacts = (state: stateType) => state.contacts.items;
const selectLoading = (state: stateType) => state.contacts.loading;
const selectError = (state: stateType) => state.contacts.error;

const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    if (!filterValue.trim()) return contacts;
    const normalizeFilter = filterValue.toLowerCase().trim();

    return contacts.filter((item: contactType) => {
      const normalizeName = item.name.toLowerCase();
      return normalizeName.includes(normalizeFilter);
    });
  }
);

export default contactsSlice.reducer;
export { selectContacts, selectLoading, selectError, selectFilteredContacts };
