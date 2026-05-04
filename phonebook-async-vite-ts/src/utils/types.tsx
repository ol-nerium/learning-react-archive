interface contactType {
  createdAt: string;
  id: string;
  name: string;
  number: string;
}

interface contactsType {
  items: contactType[];
  loading: boolean;
  error: null | string | unknown;
}

interface filterType {
  value: string;
}

interface stateType {
  contacts: contactsType;
  filter: filterType;
}

export type { contactType, stateType, contactsType, filterType };
