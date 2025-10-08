interface contactType {
  id: string;
  name: string;
  number: string;
}

interface actionType {
  type: string;
  payload: contactType | string;
}

export type { contactType, actionType };
