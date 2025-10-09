import type { contactType } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';

const loadedContacts = () => {
  try {
    const storageContacts: contactType[] = JSON.parse(
      localStorage.getItem('contacts') as string
    );
    return storageContacts ? storageContacts : [];
  } catch {
    return [];
  }
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: loadedContacts(),
  reducers: {
    contactAdded(state, action) {
      console.log(state);
      if (
        state.find(
          (contact: contactType) =>
            contact.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        )
      ) {
        alert('name already existes in the list');
        return state;
      }
      return [...state, action.payload];
    },

    contactRemoved(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export default contactsReducer.reducer;
export const { contactAdded, contactRemoved } = contactsReducer.actions;
