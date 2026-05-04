type friendType = {
  avatar: string;
  id?: number;
  isOnline: boolean | string;
  name: string;
};

type transactionType = {
  amount: string;
  currency: string;
  id?: string;
  type: string;
};

export type { friendType, transactionType };
