import type { contactType, actionType } from '@/utils/types';

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

const initialState: {
  items: { contacts: contactType[] };
} = {
  items: {
    contacts: loadedContacts(),
  },
};

const addContact = (newItem: contactType): actionType => {
  return {
    type: 'action/contactAdded',
    payload: newItem,
  };
};

const removeContact = (key: string): actionType => {
  return {
    type: 'action/contactRemoved',
    payload: key,
  };
};

const contactsReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'action/contactAdded': {
      if (
        state.items.contacts.find(
          (contact: contactType) =>
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

    default:
      return state;
  }
};

export { addContact, removeContact, contactsReducer };
