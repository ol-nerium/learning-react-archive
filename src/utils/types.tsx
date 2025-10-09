interface contactType {
  id: string;
  name: string;
  number: string;
}

// interface addedContactType {
//   type: 'action/contactAdded';
//   payload: contactType;
// }

// interface removedContactType {
//   type: 'action/contactRemoved';
//   payload: string;
// }

// interface filterActionType {
//   type: string;
//   payload: string;
// }

// type ContactsActionType = addedContactType | removedContactType;

interface stateType {
  contacts: { items: { contacts: contactType[] } };
  filters: { filter: { value: string } };
}

export type { contactType, stateType };
// ContactsActionType, filterActionType;
