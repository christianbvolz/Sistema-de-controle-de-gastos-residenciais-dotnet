type User = {
  userId: number;
  name: string;
  age: number;
  transactions: Transaction[];
}

type UserList = {
  userId: number;
  name: string;
  age: number;
  receita: number;
  despesa: number;
  total: number;
}

type Transaction = {
  transactionId: number;
  description: string;
  value: number;
  type: 'despesa' | 'receita';
  userId: number;
  user: User;
}

export type {
  User,
  UserList,
  Transaction
};
