import type { contactType } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'contacts',
  storage,
};

const initialState: { items: contactType[] } = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    contactAdded(state, action) {
      if (
        state.items.find(
          (contact: contactType) =>
            contact.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        )
      ) {
        alert('name already existes in the list');
        return state;
      }
      return { ...state, items: [...state.items, action.payload] };
    },

    contactRemoved(state, action) {
      return {
        ...state,
        items: state.items.filter(
          (item: contactType) => item.id !== action.payload
        ),
      };
    },
  },
});

const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export default contactsReducer;
export const { contactAdded, contactRemoved } = contactsSlice.actions;
