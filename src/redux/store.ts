import { configureStore } from '@reduxjs/toolkit';

interface contactType {
  id: string;
  name: string;
  number: string;
}

interface actionType {
  type: string;
  payload: contactType | string;
}

const initialState: {
  items: { contacts: contactType[] };
  filter: { value: string };
} = {
  items: {
    contacts: [
      { id: '0', name: 'Ben', number: '380383838' },
      { id: '1', name: 'Pen', number: '380383839' },
      { id: '2', name: 'Fen', number: '380383837' },
      { id: '3', name: 'Hen', number: '380383831' },
    ],
  },
  filter: { value: '' },
};

const addContact = (newItem: contactType) => {
  return {
    type: 'action/contactAdded',
    payload: newItem,
  };
};

const removeContact = (key: string) => {
  return {
    type: 'action/contactRemoved',
    payload: key,
  };
};

const setFilterValue = (value: string) => {
  return {
    type: 'action/filterValueSet',
    payload: value,
  };
};

const rootReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'action/contactAdded': {
      if (
        state.items.contacts.find(
          (contact: stateType) =>
            contact.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        )
      ) {
        alert('name already existes in the list');
        return state;
      }
      return {
        ...state,
        items: {
          contacts: [...state.items.contacts, action.payload],
        },
      };
    }

    case 'action/contactRemoved': {
      return {
        ...state,
        items: {
          contacts: state.items.contacts.filter(
            item => item.id !== action.payload
          ),
        },
      };
    }
    case 'action/filterValueSet': {
      return {
        ...state,
        filter: { value: action.payload },
      };
    }

    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export { store, addContact, removeContact, setFilterValue };
