interface contactType {
  id: string;
  name: string;
  number: string;
}

interface stateType {
  contacts: { items: { contacts: contactType[] } };
  filters: { filter: { value: string } };
}

interface RootState {
  contacts: { items: contactType[] };
  filters: { value: string };
}

export type { contactType, stateType, RootState };
